import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  templateUrl: './renameDialog.component.html'
})
export class RenameDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<RenameDialogComponent>) {}

  folderName: string;

  ngOnInit() {}
}