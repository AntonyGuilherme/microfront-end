import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LunaComponentsComponent } from './luna-components/luna-components.component';
import { LunaNotFoundedComponent } from './luna-not-founded/luna-not-founded.component';

const routes: Routes = [
  {path: 'home/luna', component: LunaComponentsComponent},
  { path: '**', pathMatch: "full", component: LunaNotFoundedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
