import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Observable} from "rxjs";

@Component({
  selector: 'mr-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mr-widget.component.html',
  styleUrls: ['./mr-widget.component.scss']
})
export class MrWidgetComponent {
  @Input() loading: Observable<boolean>;
}
