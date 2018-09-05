import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-type-dialog',
  templateUrl: './add-type-dialog.component.html',
  styleUrls: ['./add-type-dialog.component.css']
})
export class AddTypeDialogComponent implements OnInit {

    locationName: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<AddTypeDialogComponent>) { }

  ngOnInit() {
  }

  onCancelClick(): void {
      this.dialogRef.close();
  }

}
