import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
  path: '', redirectTo: 'home', pathMatch: 'full'
  }, {
    path: 'directive-and-pipe',
    loadChildren: () => import('./lessons/directive-and-pipe/directive-and-pipe.module').then(m => m.DirectiveAndPipeModule)
  }, {
    path: 'form-advanced',
    loadChildren: () => import('./lessons/form-advanced/form-advanced.module').then(m => m.FormAdvancedModule)
  }, {
    path: 'home', loadChildren: () => import('./lessons/home/home.module').then(m => m.HomeModule)
  }, {
    path: 'basic-syntax',
    loadChildren: () => import('./lessons/basic-syntax/basic-syntax.module').then(m => m.BasicSyntaxModule)
  },{
    path: 'ngxs', loadChildren: () => import('./lessons/ngrx/ngrx.module').then(m => m.NgrxModule)
  }, {
  path: 'functions',
    loadChildren: () => import('./lessons/functions/functions.module').then(m => m.FunctionsModule)
  }, {
    path: 'css-layout-examples',
    loadChildren: () => import('./lessons/css-layout-examples/css-layout-examples.module').then(m => m.CssLayoutExamplesModule)
  }, {
    path: 'games',
    loadChildren: () => import('./lessons/games/games.module').then(m => m.GamesModule)
  }, {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
