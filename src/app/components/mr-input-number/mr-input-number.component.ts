import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputNumberModule} from 'primeng/inputnumber';
import {FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'mr-input-number',
  standalone: true,
  imports: [CommonModule, InputNumberModule, ReactiveFormsModule],
  templateUrl: './mr-input-number.component.html',
  styleUrls: ['./mr-input-number.component.scss']
})
export class MrInputNumberComponent {
  @Input() control = new FormControl();
  @Input() placeholder = '';
  @Input() size: 'sm' | '' | 'lg' = '';
  @Input() min = 0;
  @Input() max = 999999999999999999999999;
  @Input() suffix = '';
  @Input() prefix = '';
  @Input() showButtons = false;

  @Output() changed = new EventEmitter();

  valueChanged() {
    console.log(this.control.value);
    this.changed.emit(this.control.value);
  }
}
