import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog-cadastrar.component.html',
  styleUrls: ['./dialog-cadastrar.component.css']
})
export class DialogCadastrarComponent implements OnInit {

  form: FormGroup;
  description: string;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DialogCadastrarComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

      this.description = data.description;
    }

    ngOnInit() {
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

  }
