import {Injectable, Input} from '@angular/core';
import {MessageService} from "primeng/api";
import {ColorEnum} from "../../enums/colorEnum";

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor(private messageService: MessageService) {
  }

  showMessage(summary = '',
              detail = '',
              color: ColorEnum = ColorEnum.INFO) {
    this.messageService.add({
      severity: color,
      summary: summary,
      detail: detail
    });
  }
}
