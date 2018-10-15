import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatSelectChange } from '@angular/material';
import { ComboEntidades } from '../../models/combo-entidades';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog-cadastrar.component.html',
  styleUrls: ['./dialog-cadastrar.component.css']
})
export class DialogCadastrarComponent implements OnInit {

  form: FormGroup;
  description: string;
  dados: any;

  @Input()
  entidades: ComboEntidades[];

  @Output()
  public changeSelect = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DialogCadastrarComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      this.dados = data;
      this.description = data.description;
    }

    ngOnInit() {
      console.log(this.dados);
      this.form = this.fb.group({
        description: [this.description, []],
      });
    }

    save() {
      this.dialogRef.close(this.form.value);
    }

    close() {
      this.dialogRef.close();
    }

    onChangeSelect(event: MatSelectChange) {
      this.changeSelect.emit(event.value);
    }

  }
