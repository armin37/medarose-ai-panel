import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StepsModule} from 'primeng/steps';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-new-edit-insured',
  standalone: true,
  imports: [CommonModule, StepsModule],
  templateUrl: './new-edit-insured.component.html',
  styleUrls: ['./new-edit-insured.component.scss']
})
export class NewEditInsuredComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'تلفن همراه',
        routerLink: 'phone'
      },
      {
        label: 'تایید اطلاعات',
        routerLink: 'approve-data'
      }
    ];
  }
}
