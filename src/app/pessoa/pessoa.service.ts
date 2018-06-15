import { environment } from './../../environments/environment';
import { Pessoa } from './models/pessoa.model';
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'

@Injectable()
export class PessoaService {

    private baseUrl: string = environment.apiUrl;

    constructor(private http: Http) { }

    public buscarTodos(): Observable<Pessoa[]> {
        return this.http.get(`${this.baseUrl}/pessoa`).map(response => response.json());
    }

    public buscarPorId(id: string): Observable<Pessoa> {
        return this.http.get(`${this.baseUrl}/pessoa/${id}`).map(response => response.json());
    }

    public salvar(pessoa: Pessoa): Observable<Pessoa> {
        return this.http.post(`${this.baseUrl}/pessoa`, pessoa).map(response => response.json());
    }

    public editar(pessoa: Pessoa, id: string): Observable<Pessoa> {
        return this.http.put(`${this.baseUrl}/pessoa/${id}`, pessoa).map(response => response.json());
    }

    public excluir(id: string): Observable<any> {
        return this.http.delete(`${this.baseUrl}/pessoa/${id}`);
    }

}
