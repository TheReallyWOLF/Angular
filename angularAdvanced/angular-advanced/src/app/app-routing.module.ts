import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: 'directive-and-pipe',
  loadChildren: () => import('./lessons/directive-and-pipe/directive-and-pipe.module').then(m => m.DirectiveAndPipeModule)
}, {
  path: 'form-advanced',
  loadChildren: () => import('./lessons/form-advanced/form-advanced.module').then(m => m.FormAdvancedModule)
}, {
  path: 'home', loadChildren: () => import('./lessons/home/home.module').then(m => m.HomeModule)
}, {
  path: '', redirectTo: 'home', pathMatch: 'full'
},
  {
    path: 'basic-syntax', loadChildren: () => import('./lessons/basic-syntax/basic-syntax.module').then(m => m.BasicSyntaxModule)
  },
  {
    path: 'ngxs', loadChildren: () => import('./lessons/ngrx/ngrx.module').then(m => m.NgrxModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
