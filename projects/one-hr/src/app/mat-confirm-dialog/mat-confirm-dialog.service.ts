import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material'
import { MatConfirmDialogComponent } from './mat-confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class MatConfirmDialogService {

  constructor(private dialog: MatDialog) { }

  public openConfirmDialog() {
    this.dialog.open(MatConfirmDialogComponent,{
      width: '390px',
      disableClose: true
    });
  }
}
