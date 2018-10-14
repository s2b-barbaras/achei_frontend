import { ComboEntidades } from './../../models/combo-entidades';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.css']
})
export class SelectBoxComponent implements OnInit {

  @Input()
  entidades: ComboEntidades[];

  @Output()
  public changeSelect = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChangeSelect(event: MatSelectChange) {
    this.changeSelect.emit(event.value);
  }

}
