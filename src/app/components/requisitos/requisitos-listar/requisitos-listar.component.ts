import { Component , OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { Requisito } from 'src/app/model/requisito';
import { RequisitoService } from 'src/app/service/requisito.service';


@Component({
  selector: 'app-requisitos-listar',
  templateUrl: './requisitos-listar.component.html',
  styleUrls: ['./requisitos-listar.component.css']
})
export class RequisitosListarComponent implements OnInit
{

  lista: Requisito[] = []
  dataSource: MatTableDataSource<Requisito> = new MatTableDataSource();

  displayedColumns: string[] = ['id', 'requisito', 'accion01']

  constructor(private rS: RequisitoService) {

  }
  ngOnInit(): void {
    this.rS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })

    this.rS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }


  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
}


