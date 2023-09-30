import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MrKnobComponent} from "../../../components/mr-knob/mr-knob.component";
import {MrProgressComponent} from "../../../components/mr-progress/mr-progress.component";

@Component({
  selector: 'app-survey-detail',
  standalone: true,
  imports: [CommonModule, MrKnobComponent, MrProgressComponent],
  templateUrl: './survey-detail.component.html',
  styleUrls: ['./survey-detail.component.scss']
})
export class SurveyDetailComponent {

}
