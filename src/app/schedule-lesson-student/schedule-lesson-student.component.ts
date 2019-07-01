import { Component, OnInit , ViewChild, AfterViewInit, Renderer2 } from '@angular/core';
import { Moment } from 'moment';
import { MatCalendar } from '@angular/material';
@Component({
  selector: 'app-schedule-lesson-student',
  templateUrl: './schedule-lesson-student.component.html',
  styleUrls: ['./schedule-lesson-student.component.scss']
})
export class ScheduleLessonStudentComponent implements AfterViewInit {

  @ViewChild('calendar', {static : true}) calendar: MatCalendar<Moment>;
  selectedDate: Moment;
  Schedulelessons = [{
    name : 'Gera Omenne' ,
    desc : 'texas Christian University' ,
    avatar : './../assets//images/avatar2.jpg'
  } ,
  {
    name : 'Sandeep Tiwari' ,
    desc : 'texas Christian University' ,
    avatar : './../assets//images/avatar2.jpg'
  } ,
  {
    name : 'Alexander Himstead' ,
    desc : 'Chapman University' ,
    avatar : './../assets//images/avatar2.jpg'
  }
] ;
  constructor(private renderer: Renderer2) { }
  monthSelected(date) {
    // alert(`Selected: ${date}`);
  }

  onDateChanged(date) {
   // alert(`Selected: ${date}`);
  }

  ngAfterViewInit() {
    // Find all arrow buttons in the calendar
    const buttons = document.querySelectorAll('mat-calendar mat-calendar-header button');

    if (buttons) {
      // Listen for click event
      Array.from(buttons).forEach(button => {
        this.renderer.listen(button, 'click', () => {
       //   alert('Arrow button clicked');
        });
      });
    }
  }

}
