import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatTableModule } from '@angular/material/table'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core'
import { MatButtonModule } from '@angular/material/button';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { EmpresaListarComponent } from './components/empresa/empresa-listar/empresa-listar.component';
import { EmpresaCRUDComponent } from './components/empresa/empresa-crud/empresa-crud.component';
import { RequisitosComponent } from './components/requisitos/requisitos.component';
import { RequisitosListarComponent } from './components/requisitos/requisitos-listar/requisitos-listar.component';
import { RequisitosCreaeditaComponent } from './components/requisitos/requisitos-creaedita/requisitos-creaedita.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioListarComponent } from './components/usuario/usuario-listar/usuario-listar.component';
import { UsuarioCreaeditaComponent } from './components/usuario/usuario-creaedita/usuario-creaedita.component';
import { MatSelectModule } from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { EmpresaDialogoComponent } from './components/empresa/empresa-listar/empresa-dialogo/empresa-dialogo.component';
import { UsuarioDialogoComponent } from './components/usuario/usuario-listar/usuario-dialogo/usuario-dialogo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RequisitosDialogoComponent } from './components/requisitos/requisitos-listar/requisitos-dialogo/requisitos-dialogo.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpresaComponent,
    EmpresaListarComponent,
    EmpresaCRUDComponent,
    EmpresaDialogoComponent,
    RequisitosComponent,
    RequisitosListarComponent,
    RequisitosCreaeditaComponent,
    RequisitosDialogoComponent,
    UsuarioComponent,
    UsuarioListarComponent,
    UsuarioCreaeditaComponent,
    UsuarioDialogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSelectModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
