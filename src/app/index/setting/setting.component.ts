import { Component, OnInit ,Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingModel } from 'src/app/auth/model/Setting.model';
import { SettingService } from 'src/app/shared/services/setting/setting.service';
import {ActivatedRoute, Router} from "@angular/router";
import { MrInputComponent } from "../../components/mr-input/mr-input.component";


@Component({
    selector: 'setting',
    standalone: true,
    templateUrl: './setting.component.html',
    styleUrls: ['./setting.component.scss'],
    imports: [CommonModule, MrInputComponent]
})
export class SettingComponent implements OnInit{
  companyId;
  @Input() company: SettingModel;

  constructor(private settingservice: SettingService,
              private activatedRoute: ActivatedRoute){ 

}
  ngOnInit(): void {
    this.companyId = this.activatedRoute.snapshot.paramMap.get('companyId');
    if (!this.company) {
      this.loadCompany();
    }
  }

  loadCompany() {
    this.settingservice.loadCompany(this.companyId).subscribe(
      (res: SettingModel) => {
        this.company = res;
        console.log(this.company)
      })
  }
}
