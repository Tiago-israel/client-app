import { PessoaModule } from './pessoa/pessoa.module';
import { PessoaService } from './pessoa/pessoa.service';
import { ListagemPessoasComponent } from './pessoa/components/listagem/listagem-pessoas.component';
import { PessoaCadastroComponent } from './pessoa/components/cadastro/pessoa-cadastro.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { LoadingIndicatorModule } from './utils/loading-indicator/loading-indicator.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    PessoaModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
