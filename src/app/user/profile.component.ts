import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrServiceWrapper } from '../helper/toastr.service';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em {float:right; color: Red; padding-left:10px}   
  `]
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;

  constructor(private tService: ToastrServiceWrapper, private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    let firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z]*')]);
    let lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);

    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    });
  }

  validateFirstName() {
    return this.profileForm.controls.firstName.valid || this.profileForm.controls.firstName.untouched;
  }

  validateLastName() {
    return this.profileForm.controls.lastName.valid || this.profileForm.controls.lastName.untouched;
  }

  saveprofile(profile) {
    console.log(profile);
    if (!this.profileForm.valid) {
      return;
    }
    this.authService.updateCurrentUser(profile.firstName, profile.lastName);
    this.router.navigate(['/events']);
  }
  cancel() {
    this.router.navigate(['/events']);
  }

}
