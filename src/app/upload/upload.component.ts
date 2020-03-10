import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { UploadService } from './upload.service';

@Component({
  templateUrl: './upload.component.html'
})
export class UploadComponent {
  constructor(public dialog: MatDialog, public uploadService: UploadService) { }

  public openUploadDialog() {
    let dialogRef = this.dialog.open(DialogComponent, { width: '50%', height: '50%' });
  }
}