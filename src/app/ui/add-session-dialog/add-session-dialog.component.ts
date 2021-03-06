import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-add-session-dialog',
    templateUrl: './add-session-dialog.component.html',
    styleUrls: ['./add-session-dialog.component.css']
})
export class AddSessionDialogComponent implements OnInit {

    formGroup: FormGroup;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<AddSessionDialogComponent>, private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.formGroup = this.formBuilder.group({
            sessionName: ['', Validators.required]
        });
    }

    onCancelClick(): void {
        this.dialogRef.close();
    }

    onOkClick(): void {
        this.dialogRef.close({sessionName: this.formGroup.controls.sessionName.value});
    }

}
