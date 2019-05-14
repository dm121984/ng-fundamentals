import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrServiceWrapper } from '../../helper/toastr.service';
import { ISession } from '../shared/event.model';
import { restrictedWords } from '../shared/restricted-words.validator';


@Component({
  selector: 'create-session',
  templateUrl: './create-session.component.html',
  styles: [`
    em {float:right; color: Red; padding-left:10px}   
  `]
})
export class CreateSessionComponent implements OnInit {

  @Output() saveNewSessionEvent = new EventEmitter();
  @Output() cancelAdd = new  EventEmitter();
  newSessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;

  constructor(private tService: ToastrServiceWrapper, private router: Router) {
  }

  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(['foo', 'bar'])]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    });
  }


  saveSession(value) {
    if (this.newSessionForm.valid) {
      let session: ISession = {
        id: undefined,
        name: value.name,
        presenter: value.presenter,
        duration: +value.duration,
        level: value.level,
        abstract: value.abstract,
        voters: []
      }
      this.saveNewSessionEvent.emit(session);
    }
    else {
      this.tService.error('Enter all the required data.');
    }
  }
  cancel() {
    this.cancelAdd.emit();
  }
}
