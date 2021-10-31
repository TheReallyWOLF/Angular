import { Component } from '@angular/core';

@Component({
  selector: 'app-confirm-sample-directive',
  templateUrl: './confirm-sample-directive.component.html',
  styleUrls: ['./confirm-sample-directive.component.sass']
})
export class ConfirmSampleDirectiveComponent {
  onDelete() {
    console.log('Директива с удалением запустила метод');
  }
}
