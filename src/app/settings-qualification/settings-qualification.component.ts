import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-qualification',
  templateUrl: './settings-qualification.component.html',
  styleUrls: ['./settings-qualification.component.scss']
})
export class SettingsQualificationComponent implements OnInit {

  constructor() { }
  subjectArray = [

    {name : 'Study Skills' , qualification : 'Enter Content' , status : true } ,
    {name : 'Elementary Statistics' , qualification : 'Edit' , status : true } ,
    {name : 'Advance Statistics' , qualification : 'Enter Content' , status : false } ,
    {name : 'Pre Calculus' , qualification : 'Enter Content' , status : false } ,
    {name : 'Physics II' , qualification : 'Enter Content' , status : false } ,
    {name : 'Physics I' , qualification : 'Enter Content' , status : false } ,
    {name : 'Organic Chemistry I' , qualification : 'Enter Content' , status : false } ,
    {name : 'Math Advance' , qualification : 'Enter Content' , status : false } ,

] ;

  ngOnInit() {
  }

}
