import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ContatoComponent } from './components/contato/contato.component';
import { NovoProdutoComponent } from './components/novo-produto/novo-produto.component';

//Linka qual componente mostrar para cada caminho - path é o caminho depois do / 
//Aqui pode-se verificar se a pessoa está logada, para acessar algumas páginas só com login

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home", //redicionando para /home quando a rota for vazia//
    pathMatch: "full" //com full ele lê toda a URL; pode usar tbm prefix, assim sempre pega o que está primeiro 
  }, 
  {
    path:"home",
    component: HomeComponent //quando a rota for home carregará o componente Home na tela 
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
    path: "novoproduto",
    component: NovoProdutoComponent
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
