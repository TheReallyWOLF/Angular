import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicSyntaxRoutingModule } from './basic-syntax-routing.module';
import { BasicSyntaxComponent } from './basic-syntax.component';
import { SelectorEntertainmentComponent } from './selector-entertainment/selector-entertainment.component';
import { AttributeSelectorComponent } from './selector-entertainment/attribute-selector/attribute-selector.component';
import { ClassSelectorComponent } from './selector-entertainment/class-selector/class-selector.component';
import { AccessDOMBasicComponent } from './access-dom-basic/access-dom-basic.component';
import { ItemDataTransferExampleComponent } from './access-dom-basic/item-data-transfer-example/item-data-transfer-example.component';
import {UiButtonComponent} from "../../shared/ui-components/ui-button/ui-button.component";


@NgModule({
  declarations: [
    BasicSyntaxComponent,
    SelectorEntertainmentComponent,
    AttributeSelectorComponent,
    ClassSelectorComponent,
    AccessDOMBasicComponent,
    ItemDataTransferExampleComponent
  ],
  imports: [
    CommonModule,
    BasicSyntaxRoutingModule,
    UiButtonComponent,
  ]
})
export class BasicSyntaxModule { }
