import { Component, Input, Output, EventEmitter } from '@angular/core'
import { IEvent } from './shared/event.model';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html'
})

export class EventThumbnailComponent {
  @Input() event: IEvent;  
}
