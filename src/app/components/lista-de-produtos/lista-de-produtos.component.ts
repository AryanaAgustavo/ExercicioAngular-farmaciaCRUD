import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/Produto';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-lista-de-produtos',
  templateUrl: './lista-de-produtos.component.html',
  styleUrls: ['./lista-de-produtos.component.css']
})
export class ListaDeProdutosComponent implements OnInit {
  listarTodos(grupo: import("../../models/Grupo").Grupo) {
    throw new Error("Method not implemented.");
  }

  public produtos: Produto[] = []
  public produtosExibidos: Produto [] = [];
  
  constructor(private http: HttpService) {
    this.http.getProdutos().subscribe((data) => {
      this.produtos = data
      this.produtosExibidos = data
    })
  }

  listarDoGrupo (codDoGrupo: number) {
    this.produtosExibidos = this.produtos.filter(
      produto => (produto.codGrupo == codDoGrupo || codDoGrupo == 0 )
    )
  }

  ngOnInit(): void {

  }

}
