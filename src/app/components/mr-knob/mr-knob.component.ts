import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KnobModule} from 'primeng/knob';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'mr-knob',
  standalone: true,
  imports: [CommonModule, KnobModule, FormsModule],
  templateUrl: './mr-knob.component.html',
  styleUrls: ['./mr-knob.component.scss']
})
export class MrKnobComponent {
  @Input({required: true}) value: number;

}
