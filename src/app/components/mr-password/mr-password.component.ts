import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PasswordModule} from 'primeng/password';
import {FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'mr-password',
  standalone: true,
  imports: [CommonModule, PasswordModule, ReactiveFormsModule],
  templateUrl: './mr-password.component.html',
  styleUrls: ['./mr-password.component.scss']
})
export class MrPasswordComponent {
  @Input() control = new FormControl();
  @Input() placeholder = '';
  @Input() size: 'sm' | '' | 'lg' = '';
  @Input() strength = false;
  @Input() toggle = true;


  @Output() changed = new EventEmitter();

  valueChanged() {
    console.log(this.control.value);
    this.changed.emit(this.control.value);
  }
}
