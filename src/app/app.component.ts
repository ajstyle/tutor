import { Component , OnInit} from '@angular/core';
import {Router} from '@angular/router' ;
import {NavbarService} from './services/navbar.service' ;
import {ResponsiveService} from './services/responsive.service' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'studentApp';
  showNav: boolean ;
  showFiller = false;
  events = [];
  navText = 'Tutor';
  mobileScreen = true  ;
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
        name : 'Complete Lesson' ,
        url : 'completeLesson' ,
        icon : '' ,
        active : false
        },
        {
          name : 'Schedule Setting' ,
          url : 'scheduleLesson' ,
          icon : '' ,
          active : false
          },
          {
            name : 'Pending Lesson' ,
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
                    {
                      name : 'Feature' ,
                      url : 'feature' ,
                      icon : 'fa fa-calender' ,
                      active : false
                      },




] ;

constructor(public router: Router , public nav: NavbarService , public responsiveService: ResponsiveService) {


}
ngOnInit() {

  this.responsiveService.getMobileStatus().subscribe( isMobile => {
    if (isMobile) {

      this.mobileScreen = true ;
    } else {
      this.mobileScreen = false ;
    }
  });
  this.onResize();
}

onResize() {
  this.responsiveService.checkWidth();
}

setText(sidebar) {
  this.navText = sidebar.name ;
}

}
