import { NgForm } from '@angular/forms';
import { PessoaCadastroComponent } from './../cadastro/pessoa-cadastro.component';
import { LoadingIndicatorService } from './../../../utils/loading-indicator/loading-indicator.service';
import { PessoaService } from './../../pessoa.service';
import { Pessoa } from './../../models/pessoa.model';
import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
    selector: 'listagem-pessoas',
    templateUrl: './listagem-pessoas.component.html',
    styleUrls: ['./listagem-pessoas.component.css']
})
export class ListagemPessoasComponent implements OnInit {

    @ViewChild("cadastroPessoa") cadastroPessoa: PessoaCadastroComponent;
    public pessoas: Array<Pessoa> = new Array<Pessoa>();
    public pessoa: Pessoa = new Pessoa();
    private fomulario : NgForm;

    constructor(
        private pessoaService: PessoaService,
        private loadingIndicator: LoadingIndicatorService
    ) { }

    ngOnInit(): void {
        this.buscarPessoas();
    }

    public novaPessoa(): void {
        this.cadastroPessoa.isDetalhe = false;
        this.pessoa = new Pessoa();
    }

    public excluir(id: string): void {
        this.loadingIndicator.show();
        this.pessoaService.excluir(id).subscribe(
            () => {
                this.buscarPessoas();
                this.loadingIndicator.hide();
            }
        )
    }
    public buscarPorId(id: string, isDetalhe: boolean): void {
        this.loadingIndicator.show();
        if (isDetalhe) {
            this.cadastroPessoa.isDetalhe = true;
        }else{
            this.cadastroPessoa.isDetalhe = false;
        }
        this.pessoaService.buscarPorId(id).subscribe(
            (data) => {
                this.pessoa = data;
                this.pessoa.dataNascimentoStr = this.tratarData(this.pessoa.dataNascimento);
                this.loadingIndicator.hide();
            }
        );
    }

    public buscarPessoas(pessoaSalva?: boolean): void {
        this.loadingIndicator.show();
        this.pessoaService.buscarTodos().subscribe(data => {
            this.pessoas = data;
            this.loadingIndicator.hide();
        });
    }

    private tratarData(dataNasc: Date): string {
        let dataNascStr: string = "";
        if (dataNasc) {
            dataNascStr = dataNasc.toString().replace("T00:00:00", "");
        }
        return dataNascStr;
    }

}