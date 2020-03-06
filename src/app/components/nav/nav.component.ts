import { Component, OnInit } from '@angular/core';

interface item {
  label: string;
  route: string;
  ativo: boolean;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  itens: item[] = [
    {
      ativo: false,
      label: "Home",
      route: "/home"
    }, 
    {
      ativo: false,
      label: "Sobre",
      route: "/sobre"
    },
    {
      ativo: false,
      label: "Contato",
      route: "/contato"
    },
  ]

  constructor() { }

  //Fazer itens ficarem inativos
  botaoClicado (item: item) {
    this.itens.forEach(
      (item) => {item.ativo = false}
    )
    
    item.ativo = true;
  }

  ngOnInit(): void {
  }

}
