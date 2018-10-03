import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CertificationService } from '../../service/certification.service';
import { Certification } from '../../core/certification';

@Component({
    selector: 'app-add-role-dialog',
    templateUrl: './add-role-dialog.component.html',
    styleUrls: ['./add-role-dialog.component.css']
})
export class AddRoleDialogComponent implements OnInit {

    formGroup: FormGroup;
    availableCerts: Certification[];

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<AddRoleDialogComponent>, private formBuilder: FormBuilder,
        private certService: CertificationService) { }

    ngOnInit() {
        this.formGroup = this.formBuilder.group({
            roleName: ['', Validators.required],
            acceptedCerts: this.formBuilder.array([])
        });
        this.certService.getAvailableCertifications().subscribe((certs) => {
            this.availableCerts = certs;
            const formArray = this.formGroup.get('acceptedCerts') as FormArray;
            this.availableCerts.forEach(cert => formArray.push(new FormControl(false)));
        });
    }

    onCancelClick(): void {
        this.dialogRef.close();
    }

    onOkClick(): void {

        const formArray = this.formGroup.get('acceptedCerts') as FormArray;
        const selectedCerts = this.availableCerts.filter( (cert, index) => formArray.at(index).value === true );
        this.dialogRef.close({
            roleName: this.formGroup.controls.roleName.value,
            acceptableCerts: selectedCerts});
    }

}
