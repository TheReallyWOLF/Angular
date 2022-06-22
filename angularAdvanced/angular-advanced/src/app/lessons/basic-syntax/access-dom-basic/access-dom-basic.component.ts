import {ChangeDetectionStrategy, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-access-dom-basic',
  templateUrl: './access-dom-basic.component.html',
  styleUrls: ['./access-dom-basic.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccessDOMBasicComponent {
  transfer: string = 'меня передали через ng content'
  @ViewChild('inputViewChild') inputViewChild!: ElementRef;
  @ViewChild('paragraphElement') paragraphElement!: ElementRef;

  workDomElement(elementRef: HTMLInputElement): void {
    console.log(elementRef,'Значение поля: ' + elementRef.value);
  }

  workDomViewChild(): void {
    console.log(this.inputViewChild, 'Значение поля: ' + this.inputViewChild.nativeElement.value);
  }

}
