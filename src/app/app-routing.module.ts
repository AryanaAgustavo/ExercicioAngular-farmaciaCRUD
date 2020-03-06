import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ContatoComponent } from './components/contato/contato.component';

//Linka qual componente mostrar para cada caminho - path é o caminho depois do / 
//Aqui pode-se verificar se a pessoa está logada, para acessar algumas páginas só com login

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home", //redicionando para /home quando a rota for vazia//
    pathMatch: "full"
  }, 
  {
    path:"home",
    component: HomeComponent
  },
  {
    path:"sobre",
    component: SobreComponent
  },
  {
    path: "contato",
    component: ContatoComponent
  },
  {
    path:"**", //qualquer outra coisa que o usuario difite irá redirecionar para a home//
    redirectTo: "/home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
