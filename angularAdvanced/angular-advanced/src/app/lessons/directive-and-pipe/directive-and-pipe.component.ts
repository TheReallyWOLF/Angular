import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-and-pipe',
  templateUrl: './directive-and-pipe.component.html',
  styleUrls: ['./directive-and-pipe.component.sass']
})
export class DirectiveAndPipeComponent {
  kindOfDirective: string = 'attribute';
  changeKindOfDirective(kind: string): void {
    this.kindOfDirective = kind;
  }
}
