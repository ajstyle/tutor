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
  navText = 'Tutor';
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
              },
              {
                name : 'Review' ,
                url : 'review' ,
                icon : '' ,
                active : false
                },
                {
                  name : 'My Tutors' ,
                  url : 'myTutors' ,
                  icon : 'fa fa-user-o' ,
                  active : false
                  },
                  {
                    name : 'Block Schedule' ,
                    url : 'blockSchedule' ,
                    icon : 'fa fa-calender' ,
                    active : false
                    },




] ;

setText(sidebar) {
  this.navText = sidebar.name ;
}

}
