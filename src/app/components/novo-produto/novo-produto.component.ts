import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Produto } from 'src/app/models/Produto';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css']
})
export class NovoProdutoComponent implements OnInit {

  formProduto: FormGroup;

  constructor() { }

  createForm(produto: Produto) {
    this.formProduto = new FormGroup({
      cod: new FormControl(produto.codProduto),
      desc: new FormControl(produto.desc),
      regAnvisa: new FormControl(produto.reg_anvisa),
      controlado: new FormControl(produto.controlado),
      codGrupo: new FormControl(produto.codGrupo)
    })
  }

  enviarProduto(){
    console.log(this.formProduto)
  }

  ngOnInit(): void {
    this.createForm(new Produto()) 
  }

}
