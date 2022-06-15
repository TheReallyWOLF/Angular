import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssLayoutExamplesComponent } from './css-layout-examples.component';
import { ThreeDimensionalMenuComponent } from "./three-dimensional-menu/three-dimensional-menu.component";

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
      }
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CssLayoutExamplesRoutingModule { }
