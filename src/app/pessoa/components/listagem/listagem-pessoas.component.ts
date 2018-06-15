import { PessoaService } from './../../pessoa.service';
import { Pessoa } from './../../models/pessoa.model';
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'listagem-pessoas',
    templateUrl: './listagem-pessoas.component.html',
    styleUrls: ['./listagem-pessoas.component.css']
})
export class ListagemPessoasComponent implements OnInit {

    public pessoas: Array<Pessoa> = new Array<Pessoa>();
    public pessoa: Pessoa = new Pessoa();

    constructor(private pessoaService: PessoaService) { }

    ngOnInit(): void {
        this.buscarPessoas();
    }

    public novaPessoa(): void {
        this.pessoa = new Pessoa();
    }

    public excluir(id: string): void {
        this.pessoaService.excluir(id).subscribe(
            () => {
                this.buscarPessoas();
            }
        )
    }
    public buscarPorId(id: string): void {
        this.pessoaService.buscarPorId(id).subscribe(
            (data) => {
                this.pessoa = data;
            }
        );
    }

    public buscarPessoas(pessoaSalva?: boolean): void {
        this.pessoaService.buscarTodos().subscribe(data => {
            this.pessoas = data;
        });
    }

}