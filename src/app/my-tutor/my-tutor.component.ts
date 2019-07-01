import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-tutor',
  templateUrl: './my-tutor.component.html',
  styleUrls: ['./my-tutor.component.scss']
})
export class MyTutorComponent implements OnInit {

  text = [{
    heading : 'Lorem ipsum dolor sit amet' ,
    desc : 'I took 1 semester of anatomy and 2 semesters of Physiology and received an A in all of the courses. ',
    image : '../../assets/images/avatar2.jpg'
  } ,
  {
    heading : 'Lorem ipsum dolor sit amet' ,
    desc : 'I took 1 semester of anatomy and 2 semesters of Physiology and received an A in all of the courses. ',
    image : '../../assets/images/avatar2.jpg'
  },
  {
    heading : 'Lorem ipsum dolor sit amet' ,
    desc : 'I took 1 semester of anatomy and 2 semesters of Physiology and received an A in all of the courses. ',
    image : '../../assets/images/avatar2.jpg'
  }
] ;
  constructor() { }

  ngOnInit() {
  }




}
