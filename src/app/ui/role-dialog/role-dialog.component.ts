import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CertificationService } from '../../service/certification.service';
import { Certification } from '../../core/certification';
import { Role } from 'src/app/core/role';

@Component({
    selector: 'app-role-dialog',
    templateUrl: './role-dialog.component.html',
    styleUrls: ['./role-dialog.component.css']
})
export class RoleDialogComponent implements OnInit {

    formGroup: FormGroup;
    role: Role = null;
    mode: string = null;
    availableCerts: Certification[];

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<RoleDialogComponent>, private formBuilder: FormBuilder,
        private certService: CertificationService) {
            if (data && data.role) {
                this.role = data.role;
            }
         }

    ngOnInit() {
        let initRoleName: string;
        if (this.role) {
            this.mode = 'Edit';
            initRoleName = this.role.displayName;
        } else {
            this.mode = 'Add';
            initRoleName = '';
        }
        this.formGroup = this.formBuilder.group({
            roleName: [initRoleName, Validators.required],
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
