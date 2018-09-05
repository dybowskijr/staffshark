import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { of } from 'rxjs';
@Component({
  selector: 'app-wizard-dialog',
  templateUrl: './wizard-dialog.component.html',
  styleUrls: ['./wizard-dialog.component.css']
})
export class WizardDialogComponent implements OnInit {

    laneChoices: number[] = [10, 8, 6, 4];

    lanes: number;
    over: number;
    formGroup: FormGroup;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<WizardDialogComponent>, private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.formGroup = this.formBuilder.group({
            lanes: ['', Validators.required],
            over: ['', Validators.required]
       });
       
    }

    onCancelClick(): void {
        this.dialogRef.close();
    }

    closeDialog(): void {
        this.dialogRef.close({overs: this.over, lanes: this.lanes});
    }

    onChange(): void {
        console.log("changed!!");
    }

    get overChoices(): number[] {
        let retVal: number[] = [];
        for(let i = this.formGroup.controls.lanes.value; i > 0; i--) {
            if (this.formGroup.controls.lanes.value % i == 0) {

                retVal.push(i);
            }
        }
        console.log("get overChoices(): retVal:" + retVal + "; lanes.value: " + this.formGroup.controls.lanes.value);
        return retVal;
    }


}
