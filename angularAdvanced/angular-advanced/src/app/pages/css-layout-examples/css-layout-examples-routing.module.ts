import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CssLayoutExamplesComponent} from './css-layout-examples.component';
import {ThreeDimensionalMenuComponent} from "./three-dimensional-menu/three-dimensional-menu.component";
import {GlowingButtonHoverEffectsComponent} from "./glowing-button-hover-effects/glowing-button-hover-effects.component";
import {SpecialNavigationMenuComponent} from "./special-navigation-menu/special-navigation-menu.component";
import {AnimatedVerticalMenuComponent} from "./animated-vertical-menu/animated-vertical-menu.component";
import {DragAndDropApiComponent} from "./drag-and-drop-api/drag-and-drop-api.component";
import {CssCounterComponent} from "./css-counter/css-counter.component";
import {NativeHtmlTagsComponent} from "./native-html-tags/native-html-tags.component";
import {LoadingTextAnimationComponent} from "./loading-text-animation/loading-text-animation.component";

const routes: Routes = [
  {
    path: '',
    component: CssLayoutExamplesComponent,
    children: [
      {
        path: '',
        redirectTo: 'three-dimensional-menu',
        pathMatch: 'prefix',
      }, {
        path: 'three-dimensional-menu',
        component: ThreeDimensionalMenuComponent
      }, {
        path: 'glowing-button-hover-effects',
        component: GlowingButtonHoverEffectsComponent
      }, {
        path: 'special-navigation-menu',
        component: SpecialNavigationMenuComponent
      }, {
        path: 'animated-vertical-menu',
        component: AnimatedVerticalMenuComponent
      }, {
        path: 'drag-and-drop',
        component: DragAndDropApiComponent
      }, {
        path: 'css-counter',
        component: CssCounterComponent
      }, {
        path: 'native-html-tags',
        component: NativeHtmlTagsComponent
      }, {
        path: 'loading-example-one',
        component: LoadingTextAnimationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CssLayoutExamplesRoutingModule {
}
