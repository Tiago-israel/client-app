import { LoadingIndicatorService } from './../../../utils/loading-indicator/loading-indicator.service';
import { Pessoa } from './../../models/pessoa.model';
import { PessoaService } from './../../pessoa.service';
import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'pessoa-cadastro',
    templateUrl: './pessoa-cadastro.component.html',
    styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {

    @Output("pessoaSalva") public pessoaSalva: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Input("pessoa") public pessoa: Pessoa = new Pessoa();
    

    public isDetalhe: boolean = false;

    ngOnInit(): void { }

    constructor(
        private pessoaService: PessoaService,
        private loadingIndicatorService: LoadingIndicatorService
    ) { }

    public salvar(): void {
        this.loadingIndicatorService.show();
        this.tratarData();
        if (!this.pessoa.id) {
            this.novaPessoa();
        } else {
            this.editarPessoa();
        }
    }

    private novaPessoa(): void {
        this.pessoaService.salvar(this.pessoa).subscribe(
            (data) => {

            },
            (error) => {
                this.pessoaSalva.emit(false);
            },
            () => {
                this.loadingIndicatorService.hide();
                this.pessoaSalva.emit(true);
            }
        )
    }

    private editarPessoa(): void {
        this.pessoaService.editar(this.pessoa, this.pessoa.id).subscribe(
            (data) => {

            },
            (error) => {
                this.pessoaSalva.emit(false);
            },
            () => {
                this.loadingIndicatorService.hide();
                this.pessoaSalva.emit(true);
            }
        )
    }

    private tratarData(): void {
        this.pessoa.dataNascimento = new Date(this.pessoa.dataNascimentoStr);
    }

}