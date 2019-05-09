import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ToastrServiceWrapper } from '../helper/toastr.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'events-list',
  templateUrl: './event-list.html'
})

export class EventsListComponent implements OnInit {
  events: any
  constructor(private eventService: EventService, private tWrapper: ToastrServiceWrapper, private route: ActivatedRoute) {
  }
  ngOnInit() {
    //this.eventService.getEvents().subscribe(e => { this.events = e });
    this.events = this.route.snapshot.data['events'];
  }
  handleThumbnailClick(eventName) {
    this.tWrapper.error(eventName);
  }
}
