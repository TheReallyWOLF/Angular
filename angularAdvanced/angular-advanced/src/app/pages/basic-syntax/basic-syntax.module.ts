import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicSyntaxRoutingModule } from './basic-syntax-routing.module';
import { BasicSyntaxComponent } from './basic-syntax.component';
import { SelectorEntertainmentComponent } from './selector-entertainment/selector-entertainment.component';
import { AttributeSelectorComponent } from './selector-entertainment/attribute-selector/attribute-selector.component';
import { ClassSelectorComponent } from './selector-entertainment/class-selector/class-selector.component';
import { AccessDOMBasicComponent } from './access-dom-basic/access-dom-basic.component';
import { ItemDataTransferExampleComponent } from './access-dom-basic/item-data-transfer-example/item-data-transfer-example.component';
import {UiComponentsModule} from "../../shared/ui-components/ui-components.module";


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
        UiComponentsModule
    ]
})
export class BasicSyntaxModule { }
