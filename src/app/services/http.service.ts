import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Grupo } from '../models/Grupo';
import { Produto } from '../models/Produto';

const URL: string = "https://rdcrud.herokuapp.com";

//essa função foi a externalização do código que estava dentro, mas ele pode ser utilizado mais vezes
function adaptadorDeGrupo(data: any[]) {
  return data.map (
    (el) => {return new Grupo(el.COD_GRUPO, el.DESC)}
  )
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http :HttpClient) { }

  getGrupos () {
    return this.http.get(URL+"/grupos").pipe( //está retornando um observável
      map( adaptadorDeGrupo
        /* (data: any[]) => {
          data.map (
            (el) => {return new Grupo(el.COD_GRUPO, el.DESC)}
          )
        } */ 
      )
    )   
  }

  getProdutos () {
    return this.http.get(URL+"/produtos").pipe(
      map (
        (data: any[]) => {
         return data.map (
            (el) => {return new Produto(el.COD_PRODUTO, el.DESC, el.REG_ANVISA, el.FL_CONTROLADO, el.COD_GRUPO)}
          )
        }
      )
    )
  }

}
//.pipe =encadeia todos os métodos para um unico retorno, envia para outra função. Só é executavel quando um método chegar, ele consegue retornar uma coisa para varias funções
//el = elemento
//precisa importar o map


