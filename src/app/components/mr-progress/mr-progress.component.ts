import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProgressBarModule} from 'primeng/progressbar';

@Component({
  selector: 'mr-progress',
  standalone: true,
  imports: [CommonModule, ProgressBarModule],
  templateUrl: './mr-progress.component.html',
  styleUrls: ['./mr-progress.component.scss']
})
export class MrProgressComponent {
  @Input({required: true}) value: number;
}
