import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FunctionsComponent} from './functions.component';
import {AlgorithmsComponent} from "./algorithms/algorithms.component";
import {ExamplesComponent} from "./examples/examples.component";

const routes: Routes = [
  {
    path: '',
    component: FunctionsComponent,
    children: [{
      path: '',
      pathMatch: 'prefix',
      redirectTo: 'algorithms'
    },{
      path: 'algorithms',
      component: AlgorithmsComponent
    },{
      path: 'examples',
      component: ExamplesComponent
    }]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FunctionsRoutingModule {
}
