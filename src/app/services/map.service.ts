import { Place } from '../models/place';
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

  getAllPlaces(): Observable<Place[]> {
    return this.http.get<Place[]>(this.urlAPI + 'places')
      .pipe(
        map((dados) => {
          return dados.map(dado => new Place(dado));
        })
      );
  }

  getPlacesPorTipo(tipoPlace: string): Observable<Place[]> {
    return this.http.get<Place[]>(this.urlAPI + 'places/' + tipoPlace)
      .pipe(
        map((dados) => {
          return dados.map(dado => new Place(dado));
        })
      );
  }

  savePlace(place: Place): Observable<Place[]> {
    return this.http.post<any>(this.urlAPI + 'place', place);
    }
}
