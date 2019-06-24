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
      }


] ;

}
