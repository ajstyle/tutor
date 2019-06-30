import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'studentApp';
  showFiller = false;
  events = [];
  sideBarMenu = [
    {
    name : 'Tutor' ,
    url : 'tutor' ,
    icon : '' ,
    active : true
    },
    {
      name : 'Settings' ,
      url : 'settings' ,
      icon : '' ,
      active : false
      },
      {
        name : 'completeLesson' ,
        url : 'completeLesson' ,
        icon : '' ,
        active : false
        },
        {
          name : 'scheduleSetting' ,
          url : 'scheduleLesson' ,
          icon : '' ,
          active : false
          },
          {
            name : 'pendingLesson' ,
            url : 'pendingLesson' ,
            icon : '' ,
            active : false
            },
            {
              name : 'Setting Qualification' ,
              url : 'settingQualification' ,
              icon : '' ,
              active : false
              }
  

] ;

}
