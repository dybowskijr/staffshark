import { Component, OnInit, Inject, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CertificationService } from '../../service/certification.service';
import { Certification } from '../../core/certification';
import { StaffMember } from 'src/app/core/staff-member';


@Component({
    selector: 'app-staff-member-dialog',
    templateUrl: './staff-member-dialog.component.html',
    styleUrls: ['./staff-member-dialog.component.css']
})
export class StaffMemberDialogComponent implements OnInit {

    staffMember: StaffMember = null;
    formGroup: FormGroup;
    availableCerts: Certification[];
    mode: string;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<StaffMemberDialogComponent>, private formBuilder: FormBuilder,
        private certService: CertificationService) {
            if (data && data.staffMember) {
                this.staffMember = data.staffMember;
            }
        }

    ngOnInit() {
        if (this.staffMember) {
            this.mode = 'Edit';
            this.formGroup = this.formBuilder.group({
                displayName: [this.staffMember.displayName, Validators.required],
                formCerts: this.formBuilder.array([])
            });

        } else {
            this.mode = 'Add';
            this.formGroup = this.formBuilder.group({
                displayName: ['', Validators.required],
                formCerts: this.formBuilder.array([])
            });
        }

        this.certService.getAvailableCertifications().subscribe((certs) => {
            this.availableCerts = certs;
            const formArray = <FormArray>this.formGroup.get('formCerts');
            console.log('Got here - pre this.availableCerts.forEach; staffMember: ' + JSON.stringify(this.staffMember));
            certs.forEach(cert => {
                const hasCert = this.staffMember && this.staffMember.certifications &&
                    this.staffMember.certifications.some(memberCert => memberCert.name === cert.name);
                console.log('prepush');
                formArray.push(new FormControl(hasCert == null ? false : hasCert));
            });
        });
    }
    onCancelClick(): void {
        this.dialogRef.close();
    }

    onOkClick(): void {

        const formArray = <FormArray>this.formGroup.get('formCerts');
        console.log(JSON.stringify(this.formGroup.value));
        const editedCerts = this.availableCerts.filter((cert, index) => formArray.at(index).value === true);
        this.dialogRef.close({
            displayName: this.formGroup.controls.displayName.value,
            certifications: editedCerts
        });
    }
}
