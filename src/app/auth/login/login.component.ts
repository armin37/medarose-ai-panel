import {Component} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  options = [
    {
      id: 54,
      name: 'Armin'
    },
    {
      id: 35,
      name: 'Mary'
    },
    {
      id: 25,
      name: 'Ghorban'
    },
    {
      id: 81,
      name: 'Brozovic'
    },
  ]


  selectItemChanged(value: any) {
    console.log(value);
  }
  passwordChanged(value: any) {
    console.log(value);
  }
  inputChanged(value: any) {
    console.log(value);
  }
  inputNumberChanged(value: any) {
    console.log(value);
  }
}
