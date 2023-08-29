import { Component } from '@angular/core';
import { navItems } from './_nav';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  public navItems = navItems;
}
