import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicSyntaxRoutingModule } from './basic-syntax-routing.module';
import { BasicSyntaxComponent } from './basic-syntax.component';
import { SelectorEntertainmentComponent } from './selector-entertainment/selector-entertainment.component';
import { AttributeSelectorComponent } from './selector-entertainment/attribute-selector/attribute-selector.component';
import { ClassSelectorComponent } from './selector-entertainment/class-selector/class-selector.component';


@NgModule({
  declarations: [
    BasicSyntaxComponent,
    SelectorEntertainmentComponent,
    AttributeSelectorComponent,
    ClassSelectorComponent
  ],
  imports: [
    CommonModule,
    BasicSyntaxRoutingModule
  ]
})
export class BasicSyntaxModule { }
