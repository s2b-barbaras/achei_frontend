import { Entity } from './../models/entity';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators/';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private urlAPI: string;

  constructor(private http: HttpClient) {
    this.urlAPI = environment.urlApi;
  }

  getTodasEntidades(): Observable<Entity[]> {
    return this.http.get<Entity[]>(this.urlAPI + 'entidades')
      .pipe(
        map((dados) => {
          return dados.map(dado => new Entity(dado));
        })
      );
  }

  getEntidadesPorTipo(tipoEntidade: string): Observable<Entity[]> {
    return this.http.get<Entity[]>(this.urlAPI + 'entidades/' + tipoEntidade)
      .pipe(
        map((dados) => {
          return dados.map(dado => new Entity(dado));
        })
      );
  }

  salvarEntidade(entity: Entity): Observable<Entity[]> {
    return this.http.post<any>(this.urlAPI + 'entidade', entity);
    }
}
