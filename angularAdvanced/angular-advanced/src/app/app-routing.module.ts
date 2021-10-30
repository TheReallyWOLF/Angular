import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: 'directive-and-pipe',
  loadChildren: () => import('./lessons/directive-and-pipe/directive-and-pipe.module').then(m => m.DirectiveAndPipeModule)
}, {
  path: 'form-advanced',
  loadChildren: () => import('./lessons/form-advanced/form-advanced.module').then(m => m.FormAdvancedModule)
}, {
  path: '', redirectTo: 'directive-and-pipe', pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
