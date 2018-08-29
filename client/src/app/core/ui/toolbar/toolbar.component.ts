import {
  Component,
  EventEmitter,
  Output,
  Input
}                   from '@angular/core';
import {Observable} from 'rxjs';



@Component({
  selector   : 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls  : ['./toolbar.component.scss']
})
export class ToolbarComponent {

  @Input() loggedIn: boolean;

  @Input() routingProgress: boolean;

  @Output() homeClicked = new EventEmitter();

  @Output() menuClicked = new EventEmitter();

  constructor() {
  }
}
