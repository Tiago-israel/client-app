import { ListagemPessoasComponent } from './components/listagem/listagem-pessoas.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

const pessoasRoutes: Routes = [
    { path: '', component: ListagemPessoasComponent }
]

@NgModule({
    imports: [RouterModule.forChild(pessoasRoutes)],
    exports: [RouterModule]
})
export class PessoasRoutingModule { }