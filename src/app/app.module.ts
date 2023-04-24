import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { RequisitosComponent } from './components/requisitos/requisitos.component';
import { RequisitosListarComponent } from './components/requisitos/requisitos-listar/requisitos-listar.component';
import { RequisitosCreaeditaComponent } from './components/requisitos/requisitos-creaedita/requisitos-creaedita.component';

@NgModule({
  declarations: [
    AppComponent,
    RequisitosComponent,
    RequisitosListarComponent,
    RequisitosCreaeditaComponent,

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
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
