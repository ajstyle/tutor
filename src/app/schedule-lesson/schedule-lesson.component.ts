import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-lesson',
  templateUrl: './schedule-lesson.component.html',
  styleUrls: ['./schedule-lesson.component.scss']
})
export class ScheduleLessonComponent implements OnInit {

  constructor() { }

  dateList = [{
    month : 'Mar',
    date : 17 ,
    day : 'Thursday'
  },{
    month : 'Mar',
    date : 18 ,
    day : 'Friday'
  },{
    month : 'Mar',
    date : 19 ,
    day : 'Saturday'
  },{
    month : 'Mar',
    date : 20 ,
    day : 'Sunday'
  }] ;

  timeList = [{
    greeting : 'Morning' ,
    time : '1 am - 12 noon'
  } , {
    greeting : 'Afternoon' ,
    time : '12 noon - 6 pm'
  } ,  {
    greeting : 'Evening' ,
    time : '6 pm - 12 am'
  } ]
  ngOnInit() {
  }

}
