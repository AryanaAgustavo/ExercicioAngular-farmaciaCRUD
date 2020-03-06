import { Component, OnInit, ViewChild } from '@angular/core';
import { Grupo } from 'src/app/models/Grupo';
import { ListaDeProdutosComponent } from '../lista-de-produtos/lista-de-produtos.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
//viewChild - pega filho dado na string e guarda na variável que criamos

  @ViewChild('lista') lista: ListaDeProdutosComponent;
  

  constructor() { }

  listarGrupos(grupo: Grupo) {
    console.log(grupo);
    console.log(this.lista);
    this.lista.listarDoGrupo(grupo.cod);
  }

  

  ngOnInit(): void {
  }

}
