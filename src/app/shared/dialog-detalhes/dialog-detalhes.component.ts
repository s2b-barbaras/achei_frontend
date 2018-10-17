import { Place } from './../../models/place';
import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatSelectChange } from '@angular/material';
import { ComboPlaces } from '../../models/combo-places';

@Component({
  selector: 'app-dialog-detalhes',
  templateUrl: './dialog-detalhes.component.html',
  styleUrls: ['./dialog-detalhes.component.css']
})
export class DialogDetalhesComponent implements OnInit {

  form: FormGroup;
  place: Place;

  @Input()
  viewValue: ComboPlaces[];

  @Output()
  public showDetails = new EventEmitter();

  constructor(
    private dialogRef: MatDialogRef<DialogDetalhesComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      console.log('constructor', data);
      this.place = data;
    }

    ngOnInit() {
      console.log(this.place);
    }

    getKeys() {
      return Object.keys(this.place.camposDinamicos);
    }
    save() {
      if (this.form.valid) {
        const formValue = this.form.value;

        this.dialogRef.close(formValue);
      }
    }

    close() {
      this.dialogRef.close();
    }

    onShowDetails(event: MatSelectChange) {
      this.showDetails.emit(event.value);
    }

  }
