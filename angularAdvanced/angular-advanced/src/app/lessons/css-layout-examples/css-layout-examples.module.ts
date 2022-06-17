import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CssLayoutExamplesRoutingModule } from './css-layout-examples-routing.module';
import { CssLayoutExamplesComponent } from './css-layout-examples.component';
import { ThreeDimensionalMenuComponent } from './three-dimensional-menu/three-dimensional-menu.component';
import {UiComponentsModule} from "../../shared/ui-components/ui-components.module";
import { GlowingButtonHoverEffectsComponent } from './glowing-button-hover-effects/glowing-button-hover-effects.component';


@NgModule({
  declarations: [
    CssLayoutExamplesComponent,
    ThreeDimensionalMenuComponent,
    GlowingButtonHoverEffectsComponent
  ],
    imports: [
        CommonModule,
        CssLayoutExamplesRoutingModule,
        UiComponentsModule
    ]
})
export class CssLayoutExamplesModule { }
