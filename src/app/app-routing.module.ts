import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { EmpresaCRUDComponent } from './components/empresa/empresa-crud/empresa-crud.component';

const routes: Routes = [
  {
    path:'Empresa' ,component:EmpresaComponent, children:[
      {path:'Crear' ,component:EmpresaCRUDComponent},
      {path:'Edicion/:id', component:EmpresaCRUDComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
