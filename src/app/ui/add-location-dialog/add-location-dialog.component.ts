import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-add-location-dialog',
  templateUrl: './add-location-dialog.component.html',
  styleUrls: ['./add-location-dialog.component.css']
})
export class AddLocationDialogComponent implements OnInit {

    formGroup: FormGroup;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<AddLocationDialogComponent>, private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.formGroup = this.formBuilder.group({
            locationName: ['', Validators.required]
        });
    }

    onCancelClick(): void {
        this.dialogRef.close();
    }

    onOkClick(): void {
        this.dialogRef.close({ locationName: this.formGroup.controls.locationName.value });
    }
}
