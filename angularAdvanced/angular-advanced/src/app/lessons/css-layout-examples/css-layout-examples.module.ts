import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CssLayoutExamplesRoutingModule } from './css-layout-examples-routing.module';
import { CssLayoutExamplesComponent } from './css-layout-examples.component';
import { ThreeDimensionalMenuComponent } from './three-dimensional-menu/three-dimensional-menu.component';
import {UiComponentsModule} from "../../shared/ui-components/ui-components.module";
import { GlowingButtonHoverEffectsComponent } from './glowing-button-hover-effects/glowing-button-hover-effects.component';
import { SpecialNavigationMenuComponent } from './special-navigation-menu/special-navigation-menu.component';
import {MatIconModule} from "@angular/material/icon";
import { AnimatedVerticalMenuComponent } from './animated-vertical-menu/animated-vertical-menu.component';


@NgModule({
  declarations: [
    CssLayoutExamplesComponent,
    ThreeDimensionalMenuComponent,
    GlowingButtonHoverEffectsComponent,
    SpecialNavigationMenuComponent,
    AnimatedVerticalMenuComponent
  ],
    imports: [
        CommonModule,
        CssLayoutExamplesRoutingModule,
        UiComponentsModule,
        MatIconModule,
    ]
})
export class CssLayoutExamplesModule { }
