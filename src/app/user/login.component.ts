import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { ToastrServiceWrapper } from '../helper/toastr.service';

@Component({
  templateUrl: './login.component.html',
  styles: [`
  em {float:right; color: Red; padding-left:10px}
  `]
})
export class LoginComponent {
  userName: string;
  password: string;
  mouseoverLoginButton: boolean; //Required this as disabled button doesn't raised event

  constructor(private authService: AuthService, private router: Router, private toastrService: ToastrServiceWrapper) {

  }
  login(values) {
    if (this.authService.loginUser(values.userName, values.password)) {
      this.router.navigate(['/events']);
      this.toastrService.info('Login Success.')
    }
    else {
      this.toastrService.info('Login failed.')
    }
  }
  cancel() {
    this.router.navigate(['/events']);
  }
}
