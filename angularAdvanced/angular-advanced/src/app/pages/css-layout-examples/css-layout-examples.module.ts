import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CssLayoutExamplesRoutingModule } from './css-layout-examples-routing.module';
import { CssLayoutExamplesComponent } from './css-layout-examples.component';
import { ThreeDimensionalMenuComponent } from './three-dimensional-menu/three-dimensional-menu.component';
import { GlowingButtonHoverEffectsComponent } from './glowing-button-hover-effects/glowing-button-hover-effects.component';
import { SpecialNavigationMenuComponent } from './special-navigation-menu/special-navigation-menu.component';
import {MatIconModule} from "@angular/material/icon";
import { AnimatedVerticalMenuComponent } from './animated-vertical-menu/animated-vertical-menu.component';
import { DragAndDropApiComponent } from './drag-and-drop-api/drag-and-drop-api.component';
import { CssCounterComponent } from './css-counter/css-counter.component';
import { NativeHtmlTagsComponent } from './native-html-tags/native-html-tags.component';
import { LoadingTextAnimationComponent } from './loading-text-animation/loading-text-animation.component';
import {UiButtonComponent} from "../../shared/ui-components/ui-button/ui-button.component";


@NgModule({
  declarations: [
    CssLayoutExamplesComponent,
    ThreeDimensionalMenuComponent,
    GlowingButtonHoverEffectsComponent,
    SpecialNavigationMenuComponent,
    AnimatedVerticalMenuComponent,
    DragAndDropApiComponent,
    CssCounterComponent,
    NativeHtmlTagsComponent,
    LoadingTextAnimationComponent
  ],
  imports: [
    CommonModule,
    CssLayoutExamplesRoutingModule,
    MatIconModule,
    UiButtonComponent,
  ]
})
export class CssLayoutExamplesModule { }
