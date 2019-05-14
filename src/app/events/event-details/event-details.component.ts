import { Component, OnInit } from '@angular/core'
import { EventService } from '../shared/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ISession, IEvent } from '../shared/event.model';



@Component({
  //selector: 'event-details'
  templateUrl: './event-details.component.html',
  styles: [`
    .container{ padding-left: 20px; padding-right: 20px;}
    .event-image {height: 100px;}
    a {cursor: pointer}
  `]
})


export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean
  constructor(private eventService: EventService, private route: ActivatedRoute, private router: Router) {

  }
  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);    
  }
  addSession() {    
    this.addMode = true;
  }

  saveNewSessionHandler(value: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    value.id = nextId + 1;
    this.event.sessions.push(value);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }
  cancelAdd() {
    this.addMode = false;
  }
}
