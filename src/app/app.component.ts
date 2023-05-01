import { Component, OnInit } from '@angular/core';
import {  NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo';
  open:boolean = true
  constructor(private router:Router,private http: HttpClient)
  {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event : any) =>{

      if(event.url === '/' || event.url==='/#Inicio' || event.url==='/#Nosotros' || event.url==='/#Servicios' || event.url==='/login' || event.url==='/registrar-usuario') {
        this.open = false;
      } else{
        this.open=true
      }
    })

  }
  NgOnInit():void{
    this.http.get('http://localhost:5000/Empresa').subscribe(data => {
      console.log(data);
  });
    this.http.get('http://localhost:5000/Requisitos').subscribe(data => {
      console.log(data);
  });
    this.http.get('http://localhost:5000/Usuario').subscribe(data => {
      console.log(data);
  });
    this.http.get('http://localhost:5000/Institucion_Educativas').subscribe(data => {
      console.log(data);
  });
    this.http.get('http://localhost:5000/Carreras').subscribe(data => {
      console.log(data);
  });
    this.http.get('http://localhost:5000/Calificacio').subscribe(data => {
      console.log(data);
  });
  }

}


