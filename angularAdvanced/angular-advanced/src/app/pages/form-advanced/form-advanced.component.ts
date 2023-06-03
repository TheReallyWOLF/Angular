import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-form-advanced',
  templateUrl: './form-advanced.component.html',
  styleUrls: ['./form-advanced.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormAdvancedComponent {
  buttonOptions: string[];
  buttonName: string;

  constructor() {
    this.buttonOptions = [
      'Реактивные формы',
      'Другие формы =)',
      'Третья страница'
    ]

    this.buttonName = this.buttonOptions[0]
  }

  changeForm(index?: number): void {
    if (index) {
      this.buttonName = this.buttonOptions[index];
      return;
    }
    let i = this.buttonOptions.indexOf(this.buttonName) + 1 === this.buttonOptions.length ? 0 : this.buttonOptions.indexOf(this.buttonName) + 1
    this.buttonName = this.buttonOptions[i];
  }

}
