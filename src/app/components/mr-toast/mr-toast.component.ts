import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToastModule} from 'primeng/toast';
import {MessageService} from "primeng/api";
import {ColorEnum} from "../../shared/enums/colorEnum";

let messageId = 1;

@Component({
  selector: 'mr-toast',
  standalone: true,
  imports: [CommonModule, ToastModule],
  templateUrl: './mr-toast.component.html',
  styleUrls: ['./mr-toast.component.scss']
})
export class MrToastComponent {
  @Input() summary = '';
  @Input() detail;
  color: ColorEnum = ColorEnum.INFO;

  constructor(private messageService: MessageService) {
  }


  showMessage() {
    this.messageService.add({
      key: (messageId++).toString(),
      severity: this.color,
      summary: this.summary,
      detail: 'Message Content'
    });
  }
}
