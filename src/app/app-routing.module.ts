import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { iif } from 'rxjs';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo:'cursos'},
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
