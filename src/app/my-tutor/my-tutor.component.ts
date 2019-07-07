import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-tutor',
  templateUrl: './my-tutor.component.html',
  styleUrls: ['./my-tutor.component.scss']
})
export class MyTutorComponent implements OnInit {
  Schedulelessons = [{
    name : 'Gera Omenne' ,
    desc : 'texas Christian University' ,
    avatar : './../assets//images/avatar2.jpg'
  } ,
  {
    name : 'Sandeep Tiwari' ,
    desc : 'texas Christian University' ,
    avatar : './../assets//images/avatar2.png'
  } ,
  {
    name : 'Alexander Himstead' ,
    desc : 'Chapman University' ,
    avatar : './../assets//images/james.png '
  }
] ;
  text = [{
    heading : 'Lorem ipsum dolor sit amet' ,
    desc : 'I took 1 semester of anatomy and 2 semesters of Physiology and received an A in all of the courses. ',
    image : '../../assets/images/dream.png'
  } ,
  {
    heading : 'Lorem ipsum dolor sit amet' ,
    desc : 'I took 1 semester of anatomy and 2 semesters of Physiology and received an A in all of the courses. ',
    image : '../../assets/images/dream.png'
  },
  {
    heading : 'Lorem ipsum dolor sit amet' ,
    desc : 'I took 1 semester of anatomy and 2 semesters of Physiology and received an A in all of the courses. ',
    image : '../../assets/images/dream.png'
  }
] ;
  constructor() { }

  ngOnInit() {
  }




}
