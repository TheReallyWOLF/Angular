import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssLayoutExamplesComponent } from './css-layout-examples.component';
import { ThreeDimensionalMenuComponent } from "./three-dimensional-menu/three-dimensional-menu.component";
import {GlowingButtonHoverEffectsComponent} from "./glowing-button-hover-effects/glowing-button-hover-effects.component";

const routes: Routes = [
  { path: '',
    component: CssLayoutExamplesComponent,
    children: [
      {
        path: '',
        redirectTo: 'three-dimensional-menu'
      }, {
        path: 'three-dimensional-menu',
        component: ThreeDimensionalMenuComponent
      }, {
        path: 'glowing-button-hover-effects',
        component: GlowingButtonHoverEffectsComponent
      }
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CssLayoutExamplesRoutingModule { }
