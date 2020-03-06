import { Component, Output, EventEmitter } from '@angular/core';
import { Grupo } from 'src/app/models/Grupo';
import { HttpService } from 'src/app/services/http.service';


@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent {

  public grupos: Grupo[] = []
  @Output() grupoClicado = new EventEmitter();

  private grupoTotal: Grupo = new Grupo (0, "Todos");

  //o httpClientModule também tem que ser importado no app.module.ts
  //o metodo get retorna um observável
  //consumo de um link externo
  constructor(private http: HttpService) {
    this.http.getGrupos().subscribe((data) => { this.grupos = [this.grupoTotal, ...data] });
  }
  
}
