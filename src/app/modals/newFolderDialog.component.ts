import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  templateUrl: './newFolderDialog.component.html'
})
export class NewFolderDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<NewFolderDialogComponent>) {}

  folderName: string;

  ngOnInit() {}
}