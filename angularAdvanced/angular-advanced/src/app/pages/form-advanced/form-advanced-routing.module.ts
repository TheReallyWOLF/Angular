import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAdvancedComponent } from './form-advanced.component';

const routes: Routes = [{ path: '', component: FormAdvancedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormAdvancedRoutingModule { }
