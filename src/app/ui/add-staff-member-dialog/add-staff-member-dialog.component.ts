import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CertificationService } from '../../service/certification.service';
import { Certification } from '../../core/certification';


@Component({
  selector: 'app-add-staff-member-dialog',
  templateUrl: './add-staff-member-dialog.component.html',
  styleUrls: ['./add-staff-member-dialog.component.css']
})
export class AddStaffMemberDialogComponent implements OnInit {

    formGroup: FormGroup;
    certifications: Certification[];

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<AddStaffMemberDialogComponent>, private formBuilder: FormBuilder,
        private certService: CertificationService) { }

  ngOnInit() {
      this.formGroup = this.formBuilder.group({
          displayName: ['', Validators.required],
          selectedCerts: this.formBuilder.array([])
      });
      this.certService.getAvailableCertifications().subscribe((certs) => {
          this.certifications = certs;
          const formArray = this.formGroup.get('selectedCerts') as FormArray;
          this.certifications.forEach(cert => formArray.push(new FormControl(false)));
      });
    }
    onCancelClick(): void {
        this.dialogRef.close();
    }

    onOkClick(): void {

        const formArray = this.formGroup.get('selectedCerts') as FormArray;
        const selectedCerts = this.certifications.filter((cert, index) => formArray.at(index).value === true);
        this.dialogRef.close({
            displayName: this.formGroup.controls.displayName.value,
            certifications: selectedCerts
        });
    }
}
