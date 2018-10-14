import { Component, OnInit } from '@angular/core';
import { ComboEntidades } from '../models/combo-entidades';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  entidades: ComboEntidades[] = [
    {value: 'banheiros', viewValue: 'Banheiros'},
    {value: 'pontos-coleta-azeite', viewValue: 'Pontos de Coleta de Azeite'},
  ];

  constructor() { }

  ngOnInit() {
  }

  onChangeSelectMapOption(tipoEntidade: string) {
     console.log(tipoEntidade);
  }
}
