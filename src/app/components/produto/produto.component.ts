import { Component, OnInit, Input } from '@angular/core';
import { Produto } from 'src/app/models/Produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  @Input() produto: Produto;
//@Input permite receber um valor através de um atributo. Nesse caso permite que esse atributo produto possa colocar um tipo Produto

  constructor() { }

  ngOnInit(): void {
  }

}
