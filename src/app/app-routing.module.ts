import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequisitosComponent } from './components/requisitos/requisitos.component';
import { RequisitosCreaeditaComponent } from './components/requisitos/requisitos-creaedita/requisitos-creaedita.component';

const routes: Routes = [
  {
    path: 'requisitos', component: RequisitosComponent, children: [
      { path: 'nuevo', component: RequisitosCreaeditaComponent },
      { path: 'edicion/:id', component: RequisitosCreaeditaComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
