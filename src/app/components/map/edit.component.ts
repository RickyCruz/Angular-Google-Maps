import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Marker } from '../../classes/marker.class';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  form: FormGroup;

  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Marker) {

    this.form = fb.group({
      'title': data.title,
      'description': data.description,
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

}
