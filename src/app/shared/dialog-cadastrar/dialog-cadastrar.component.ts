import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatSelectChange } from '@angular/material';
import { ComboPlaces } from '../../models/combo-places';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog-cadastrar.component.html',
  styleUrls: ['./dialog-cadastrar.component.css']
})
export class DialogCadastrarComponent implements OnInit {

  form: FormGroup;
  dados: any;

  @Input()
  places: ComboPlaces[];

  @Output()
  public changeSelect = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DialogCadastrarComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      this.dados = data;
      this.form = this.createFormGroup();

    }
    
    createFormGroup(): FormGroup {
      return this.formBuilder.group({
        nome:  ['', Validators.required],
        descricao:  ['', Validators.required],
        tipo:  ['', Validators.required],
        keywords:  ['', Validators.required]
      });
    }

    ngOnInit() {
      console.log(this.dados);
    }

    save() {
      if (this.form.valid) {
        this.dialogRef.close(this.form.value);
      }
    }

    close() {
      this.dialogRef.close();
    }

    onChangeSelect(event: MatSelectChange) {
      this.changeSelect.emit(event.value);
    }

  }
