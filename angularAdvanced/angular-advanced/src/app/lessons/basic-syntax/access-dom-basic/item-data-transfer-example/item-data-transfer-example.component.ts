import {Component, ContentChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-item-data-transfer-example',
  templateUrl: './item-data-transfer-example.component.html',
  styleUrls: ['./item-data-transfer-example.component.sass']
})
export class ItemDataTransferExampleComponent {
  /**
   * ContentChild - позволяет добраться до элемента переданного через ng-content
   * */
  @ContentChild('paragraphElement') paragraphElement!: ElementRef;
  ngAfterViewInit() {
    console.log('добираемся до элемента переданного через ng-content');
    console.log(this.paragraphElement);
  }
}
