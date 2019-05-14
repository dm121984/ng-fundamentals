import { Component, Input } from "@angular/core";


@Component({
  selector: 'collapsible-well',
  templateUrl: './collapsible-well.component.html'
})
export class CollapsibleWellComponent {  
  visible: boolean = true;
  toggelContent() {
    this.visible = !this.visible;
  }
}
