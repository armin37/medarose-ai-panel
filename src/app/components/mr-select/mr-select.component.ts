import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {DropdownModule} from 'primeng/dropdown';

@Component({
  selector: 'mr-select',
  standalone: true,
  imports: [CommonModule, DropdownModule, ReactiveFormsModule],
  templateUrl: './mr-select.component.html',
  styleUrls: ['./mr-select.component.scss']
})
export class MrSelectComponent {
  @Input() options: any[];
  @Input() optionValue: string;
  @Input() optionLabel: string;
  @Input() filterName: string;
  @Input() control = new FormControl();
  @Input() placeholder = '';
  @Input() size: 'sm' | '' | 'lg' = '';
  @Input() editable = false;
  @Output() changed = new EventEmitter();

  valueChanged() {
    this.changed.emit(this.control.value);
  }
}
