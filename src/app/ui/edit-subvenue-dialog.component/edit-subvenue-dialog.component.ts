import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-edit-subvenue-dialog',
  templateUrl: './edit-subvenue-dialog.component.html',
  styleUrls: ['./edit-subvenue-dialog.component.css']
})
export class EditSubVenueDialogComponent implements OnInit {

    formGroup: FormGroup;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<EditSubVenueDialogComponent>, private formBuilder: FormBuilder) { }

    ngOnInit() {
        let name = '';
        if (this.data) {
            name = this.data.name;
        }
        this.formGroup = this.formBuilder.group({
            name: [name, Validators.required]
        });
    }

    onCancelClick(): void {
        this.dialogRef.close();
    }

    onOkClick(): void {
        this.dialogRef.close({ name: this.formGroup.controls.name.value });
    }
}
