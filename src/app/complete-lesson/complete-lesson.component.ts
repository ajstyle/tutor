import { Component, OnInit , ViewChild} from '@angular/core';
import Lity from 'lity';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
export interface StudentClass {
  Tutor: string;
  Schedule: string;
  Hours: number;
  Type: string;
  Cancelled: string;
}

const ELEMENT_DATA: StudentClass[] = [
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
@Component({
  selector: 'app-complete-lesson',
  templateUrl: './complete-lesson.component.html',
  styleUrls: ['./complete-lesson.component.scss']
})
export class CompleteLessonComponent implements OnInit {

  displayedColumns: string[] = ['Tutor', 'Schedule', 'Hours', 'Type', 'Cancelled', 'Actions'];
  dataSource: MatTableDataSource<StudentClass>  ;
  @ViewChild(MatPaginator ,  {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  constructor() {     this.dataSource = new MatTableDataSource(ELEMENT_DATA); }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }



  playRecording() {
    Lity('https://www.youtube.com/watch?v=XSGBVzeBUbk');

  }
}
