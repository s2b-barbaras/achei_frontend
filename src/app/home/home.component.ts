import { MapService } from './../services/map.service';
import { Entity } from './../models/entity';
import { Component, OnInit } from '@angular/core';
import { ComboEntidades } from '../models/combo-entidades';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tiposEntidades: ComboEntidades[] = [
    {value: 'banheiros', viewValue: 'Banheiros'},
    {value: 'pontos-coleta-azeite', viewValue: 'Pontos de Coleta de Azeite'},
  ];

  public entidades: Entity[];

  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.buscarTodasEntidades();
  }

  buscarTodasEntidades() {
    this.mapService.getTodasEntidades()
    .subscribe(dados => {
      this.entidades = dados;
    });
  }

  buscarEntidadesPorTipo(tipoEntidade: string) {
    this.mapService.getEntidadesPorTipo(tipoEntidade)
    .subscribe(dados => {
      this.entidades = dados;
    });
  }

  onCreateNewEntity(event) {
    console.log(event);
  }

  onChangeSelectMapOption(tipoEntidade: string) {
     this.buscarEntidadesPorTipo(tipoEntidade);
  }
}
