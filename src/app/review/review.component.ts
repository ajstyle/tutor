import { Component, OnInit } from '@angular/core';
import {ReviewPopupComponent} from '../review-popup/review-popup.component' ;
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  reviewPopup() {
    const dialogRef = this.dialog.open(ReviewPopupComponent, {
      height: '500px',
      width: '700px',
    });
  }
}
