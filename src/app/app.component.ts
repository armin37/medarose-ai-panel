import {Component} from '@angular/core';
import {IconSetService} from '@coreui/icons-angular';
import {iconSubset} from './icons/icon-subset';
import {PrimeNGConfig} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'medarose-ai-panel';

  constructor(private iconSetService: IconSetService,
              private primengConfig: PrimeNGConfig) {
    iconSetService.icons = {...iconSubset};

    this.primengConfig.setTranslation({
      apply: 'اعمال',
      clear: 'بستن'
    });
  }
}
