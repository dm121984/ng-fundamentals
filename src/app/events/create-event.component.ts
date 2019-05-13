import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { EventService } from './shared/event.service';
import { from } from 'rxjs';
import { ToastrServiceWrapper } from '../helper/toastr.service';

@Component({
  templateUrl: './create-event.component.html',
  styles: [`
    em {float:right; color: Red; padding-left:10px}
    .event-image {height: 100px; weight: 100px;}
  `]
})

  //Use [(ngModel)] within [] for two-way binding
export class CreateEventComponent implements OnInit {
  newEvent;
  isDirty: boolean = true;
  constructor(private router: Router, private eventService: EventService, private tService: ToastrServiceWrapper) {

  }
  ngOnInit() {

  }
  saveEvent(formValues) {
    console.log(formValues);
    var currentCount = this.eventService.saveEvent(formValues);
    this.tService.success('Event created, new event count is ' + currentCount);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }
  cancel() {
    this.router.navigate(['/events']);
  }
}
