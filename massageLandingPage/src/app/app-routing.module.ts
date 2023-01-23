import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home-page',
    pathMatch: 'full'
  }, {
    path: 'home-page',
    loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
