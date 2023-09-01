import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'mr-input',
  standalone: true,
  imports: [CommonModule, InputTextModule, ReactiveFormsModule],
  templateUrl: './mr-input.component.html',
  styleUrls: ['./mr-input.component.scss']
})
export class MrInputComponent {
  @Input() control = new FormControl();
  @Input() placeholder = '';
  @Input() size: 'sm' | '' | 'lg' = '';
  @Input() icon = '';

  @Output() changed = new EventEmitter();

  valueChanged() {
    this.changed.emit(this.control.value);
  }
}
