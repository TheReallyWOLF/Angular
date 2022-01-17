import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicSyntaxComponent } from './basic-syntax.component';

const routes: Routes = [{ path: '', component: BasicSyntaxComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicSyntaxRoutingModule { }
