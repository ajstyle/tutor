import { Component, OnInit , ViewChild, AfterViewInit, Renderer2 } from '@angular/core';
import { Moment } from 'moment';
import { MatCalendar } from '@angular/material';
@Component({
  selector: 'app-block-schedule',
  templateUrl: './block-schedule.component.html',
  styleUrls: ['./block-schedule.component.scss']
})
export class BlockScheduleComponent implements AfterViewInit {

  @ViewChild('calendar', {static : true}) calendar: MatCalendar<Moment>;
  selectedDate: Moment;
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
