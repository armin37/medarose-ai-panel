import {Component, OnInit, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoverageSetting, CoverageSettingPatchRequest, SettingModel} from 'src/app/auth/model/setting.model';
import {SettingService} from 'src/app/shared/services/setting/setting.service';
import {ActivatedRoute, Router} from "@angular/router";
import {MrInputComponent} from "../../components/mr-input/mr-input.component";
import {MrInputNumberComponent} from "../../components/mr-input-number/mr-input-number.component";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {ColorEnum} from "../../shared/enums/colorEnum";
import {MrButtonComponent} from "../../components/mr-button/mr-button.component";
import {LoadingService} from "../../shared/services/loading/loading.service";
import {MrWidgetComponent} from "../../components/mr-widget/mr-widget.component";


@Component({
  selector: 'setting',
  standalone: true,
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
  imports: [CommonModule, MrInputComponent, MrInputNumberComponent, FormsModule, ReactiveFormsModule, MrButtonComponent, MrWidgetComponent]
})
export class SettingComponent implements OnInit {
  coverageForm: FormGroup;

  constructor(private fb: FormBuilder,
              private settingService: SettingService,
              public loadingService: LoadingService) {

  }

  ngOnInit(): void {
    this.loadCompany();
  }

  loadCompany() {
    this.settingService.loadCompany().subscribe(
      (res: CoverageSetting) => {
        this.createCoverageForm(res);
      })
  }

  createCoverageForm(data: CoverageSetting) {
    this.coverageForm = this.fb.group({
      insurancePremium: this.fb.group({
        min: [data.insurancePremium.min, Validators.required],
        max: [data.insurancePremium.max, Validators.required]
      }),
      insurancePremiumIncreaseRate: this.fb.group({
        min: [data.insurancePremiumIncreaseRate.min, Validators.required],
        max: [data.insurancePremiumIncreaseRate.max, Validators.required]
      }),
      contractDuration: this.fb.group({
        min: [data.contractDuration.min, Validators.required],
        max: [data.contractDuration.max, Validators.required]
      }),
      deathBenefit: this.fb.group({
        min: [data.deathBenefit.min, Validators.required],
        max: [data.deathBenefit.max, Validators.required]
      }),
      deathBenefitRatio: this.fb.group({
        min: [data.deathBenefit.min, Validators.required],
        max: [data.deathBenefit.max, Validators.required]
      }),
      deathBenefitIncreaseRate: this.fb.group({
        min: [data.deathBenefit.min, Validators.required],
        max: [data.deathBenefit.max, Validators.required]
      }),
      accidentalDeathRatio: this.fb.group({
        min: [data.deathBenefit.min, Validators.required],
        max: [data.deathBenefit.max, Validators.required]
      }),
      diseaseCoverageRatio: this.fb.group({
        min: [data.deathBenefit.min, Validators.required],
        max: [data.deathBenefit.max, Validators.required]
      }),
      riskLevelsLow: this.fb.group({
        from: [data.riskLevels.find(a => a.title === 'کم').interval[0], Validators.required],
        to: [data.riskLevels.find(a => a.title === 'کم').interval[1], Validators.required]
      }),
      riskLevelsMedium: this.fb.group({
        from: [data.riskLevels.find(a => a.title === 'متوسط').interval[0], Validators.required],
        to: [data.riskLevels.find(a => a.title === 'متوسط').interval[1], Validators.required]
      }),
      riskLevelsHigh: this.fb.group({
        from: [data.riskLevels.find(a => a.title === 'زیاد').interval[0], Validators.required],
        to: [data.riskLevels.find(a => a.title === 'زیاد').interval[1], Validators.required]
      })
    });
  }

  saveData() {
    const requestBody: CoverageSettingPatchRequest = {
      insurancePremium: this.coverageForm.controls['insurancePremium'].value,
      insurancePremiumIncreaseRate: this.coverageForm.controls['insurancePremiumIncreaseRate'].value,
      contractDuration: this.coverageForm.controls['contractDuration'].value,
      deathBenefit: this.coverageForm.controls['deathBenefit'].value,
      deathBenefitRatio: this.coverageForm.controls['deathBenefitRatio'].value,
      deathBenefitIncreaseRate: this.coverageForm.controls['deathBenefitIncreaseRate'].value,
      accidentalDeathRatio: this.coverageForm.controls['accidentalDeathRatio'].value,
      diseaseCoverageRatio: this.coverageForm.controls['diseaseCoverageRatio'].value,
      riskLevels: [
        {
          "title": "کم",
          "interval": [this.coverageForm.controls['riskLevelsLow'].get('from').value, this.coverageForm.controls['riskLevelsLow'].get('to').value]
        },
        {
          "title": "متوسط",
          "interval": [this.coverageForm.controls['riskLevelsMedium'].get('from').value, this.coverageForm.controls['riskLevelsMedium'].get('to').value]
        },
        {
          "title": "زیاد",
          "interval": [this.coverageForm.controls['riskLevelsHigh'].get('from').value, this.coverageForm.controls['riskLevelsHigh'].get('to').value]
        },
      ]
    }

    this.settingService.updateSettings(requestBody).subscribe(res => console.log(res));
  }

  asFormControl(control: AbstractControl): FormControl {
    return control as FormControl;
  }

  protected readonly ColorEnum = ColorEnum;
}
