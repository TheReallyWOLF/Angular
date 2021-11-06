import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectiveAndPipeComponent } from './directive-and-pipe.component';

const routes: Routes = [{ path: '', component: DirectiveAndPipeComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DirectiveAndPipeRoutingModule { }
