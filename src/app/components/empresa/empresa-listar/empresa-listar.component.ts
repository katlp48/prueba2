import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Empresa } from 'src/app/model/Empresa';
import { EmpresaService } from 'src/app/service/empresa.service'

@Component({
  selector: 'app-empresa-listar',
  templateUrl: './empresa-listar.component.html',
  styleUrls: ['./empresa-listar.component.css']
})
export class EmpresaListarComponent implements OnInit{

  dataSourceEmpresa: MatTableDataSource<Empresa>=new MatTableDataSource();
  displayedColumnsEmpresa: string[] = ['id', 'nombre', 'descripcion', 'correo', 'accion01']

  constructor(private empresaService: EmpresaService) {}

  ngOnInit(): void {
    this.empresaService.List().subscribe(data=> {
      this.dataSourceEmpresa = new MatTableDataSource(data);
    })
    this.empresaService.GetList().subscribe(data=> {
      this.dataSourceEmpresa = new MatTableDataSource(data)
    })
  }

  filtrar(e:any){
    this.dataSourceEmpresa.filter = e.target.value.trim();
  }

}
