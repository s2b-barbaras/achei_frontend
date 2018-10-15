import { DialogCadastrarComponent } from './../shared/dialog-cadastrar/dialog-cadastrar.component';
import { MapService } from './../services/map.service';
import { Entity } from './../models/entity';
import { Component, OnInit } from '@angular/core';
import { ComboEntidades } from '../models/combo-entidades';
import { MatDialog, MatDialogConfig } from '@angular/material';

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
  public tipoEntidadeSelecionado: string;
  public entidades: Entity[];

  constructor(
    private mapService: MapService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.buscarTodasEntidades();
  }

  buscarTodasEntidades() {
    this.mapService.getTodasEntidades()
    .subscribe(dados => {
      this.entidades = dados;
    });
  }

  openDetails(dadosSelecionado) {
    console.log('openDetails', dadosSelecionado);
  }

  buscarEntidadesPorTipo(tipoEntidade: string) {
    this.mapService.getEntidadesPorTipo(tipoEntidade)
    .subscribe(dados => {
      this.entidades = dados;
    });
  }

  configDialog(dialogConfig: MatDialogConfig) {
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.position = {
      'top': '0',
      left: '0'
    };

    dialogConfig.data = {
      id: 1,
      title: 'Angular For Beginners'
    };
  }

  saveEntity(dados, eventCoordenadas) {
    dados.localizacao = {
      latitude: eventCoordenadas.coords.lat,
      longitude: eventCoordenadas.coords.lng,
    };
    console.log('dados para salvar', dados);
    // Descomentar somente quando o objeto dados vier corretamente
    this.mapService.salvarEntidade(dados)
      .subscribe(() => {
        // Chamar o buscarEntidadesPorTipo passando o this.tipoEntidadeSelecionado
      });
  }

  onCreateNewEntity(event) {
    console.log(event);
    const dialogConfig = new MatDialogConfig();

    this.configDialog(dialogConfig);

    const dialogRef = this.dialog.open(DialogCadastrarComponent, dialogConfig);

    dialogRef.afterClosed()
      .subscribe(
        dados => this.saveEntity(dados, event)
    );
  }

  onChangeSelectMapOption(tipoEntidade: string) {
    this.tipoEntidadeSelecionado = tipoEntidade;
    this.buscarEntidadesPorTipo(tipoEntidade);
  }
}
