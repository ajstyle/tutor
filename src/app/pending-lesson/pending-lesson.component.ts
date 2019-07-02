import { Component, OnInit , ViewChild } from '@angular/core';
import Lity from 'lity';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ResponsiveService} from '../services/responsive.service' ;
@Component({
  selector: 'app-pending-lesson',
  templateUrl: './pending-lesson.component.html',
  styleUrls: ['./pending-lesson.component.scss']
})


export class PendingLessonComponent implements OnInit {

  public isMobile: boolean;
  displayedColumns: string[] = ['Tutor', 'Schedule', 'Hours', 'Type', 'Cancelled', 'Actions'];
  dataSource: MatTableDataSource<PendingClass>  ;
  @ViewChild(MatPaginator ,  {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  constructor(public responsiveService: ResponsiveService ) {     this.dataSource = new MatTableDataSource(ELEMENT_DATA); }

  ngOnInit() {
    this.onResize(event);
   // this.responsiveService.checkWidth();
    this.responsiveService.checkWidth();

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onResize(event) {
    console.log(event) ;
    this.responsiveService.checkWidth();

    this.responsiveService.getMobileStatus().subscribe(isMobile => {
      this.isMobile = isMobile;
      console.log('this.isMobile=======',this.isMobile) ; 
    });
  }
  playRecording() {
    Lity('https://www.youtube.com/watch?v=XSGBVzeBUbk');

  }
}

export interface PendingClass {
  Tutor: string;
  Schedule: string;
  Hours: number;
  Type: string;
  Cancelled: string;
}


const ELEMENT_DATA: PendingClass[] = [
  {Tutor: 'tutor2' , Schedule: 'Nov 9, 2017 7:30pm', Hours: 2.0  , Type: 'Online' , Cancelled : 'No' },
  {Tutor: 'tutor2' , Schedule: 'Nov 9, 2017 7:30pm', Hours: 2.0  , Type: 'Online' , Cancelled : 'No' },
  {Tutor: 'tutor2' , Schedule: 'Nov 9, 2017 7:30pm', Hours: 2.0  , Type: 'Online' , Cancelled : 'No' },
  {Tutor: 'tutor2' , Schedule: 'Nov 9, 2017 7:30pm', Hours: 2.0  , Type: 'Online' , Cancelled : 'No' },
  {Tutor: 'tutor2' , Schedule: 'Nov 9, 2017 7:30pm', Hours: 2.0  , Type: 'Online' , Cancelled : 'No' },
  {Tutor: 'tutor2' , Schedule: 'Nov 9, 2017 7:30pm', Hours: 2.0  , Type: 'Online' , Cancelled : 'No' },
  {Tutor: 'tutor2' , Schedule: 'Nov 9, 2017 7:30pm', Hours: 2.0  , Type: 'Online' , Cancelled : 'No' },
  {Tutor: 'tutor2' , Schedule: 'Nov 9, 2017 7:30pm', Hours: 2.0  , Type: 'Online' , Cancelled : 'No' },
  {Tutor: 'tutor2' , Schedule: 'Nov 9, 2017 7:30pm', Hours: 2.0  , Type: 'Online' , Cancelled : 'No' },
  {Tutor: 'tutor2' , Schedule: 'Nov 9, 2017 7:30pm', Hours: 2.0  , Type: 'Online' , Cancelled : 'No' },
  {Tutor: 'tutor2' , Schedule: 'Nov 9, 2017 7:30pm', Hours: 2.0  , Type: 'Online' , Cancelled : 'No' },
  {Tutor: 'tutor2' , Schedule: 'Nov 9, 2017 7:30pm', Hours: 2.0  , Type: 'Online' , Cancelled : 'No' },
  {Tutor: 'tutor2' , Schedule: 'Nov 9, 2017 7:30pm', Hours: 2.0  , Type: 'Online' , Cancelled : 'No' },

];