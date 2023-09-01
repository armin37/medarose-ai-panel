import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'mr-button',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './mr-button.component.html',
  styleUrls: ['./mr-button.component.scss']
})
export class MrButtonComponent {
  @Input() label = '';
  @Input() icon = '';
  @Input() type: 'submit' | 'button' = 'button';
  @Input() disabled = false;
  @Input() loading = false;
  @Input() size: 'sm' | '' | 'lg' = '';
  @Input() color: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'help' | 'danger' = 'primary';
  @Input() shape: '' | 'rounded' | 'outlined' | 'text' | 'link' | 'outlined p-button-rounded' = '';
  @Output() clicked = new EventEmitter<any>();

  btnClicked() {
    this.clicked.emit();
  }
}
