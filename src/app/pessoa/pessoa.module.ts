import { LoadingIndicatorModule } from './../utils/loading-indicator/loading-indicator.module';
import { PessoaService } from './pessoa.service';
import { ListagemPessoasComponent } from './components/listagem/listagem-pessoas.component';
import { NgModule } from "@angular/core";
import { PessoaCadastroComponent } from './components/cadastro/pessoa-cadastro.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PessoasRoutingModule } from './pessoa.routing';

@NgModule({
    declarations: [
        ListagemPessoasComponent,
        PessoaCadastroComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        PessoasRoutingModule,
        LoadingIndicatorModule
    ],
    providers: [
        PessoaService
    ],
    exports:[
        ListagemPessoasComponent,
        PessoaCadastroComponent
    ]
})
export class PessoaModule { }