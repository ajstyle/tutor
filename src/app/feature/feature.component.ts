import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  constructor() { }

 features = [] ; 

  ngOnInit() {
    this.features = [{
      icon : '../../assets/images/angle.png',
      image : '../../assets/images/angle1.png',
    } , {
      icon : '../../assets/images/edit.png',
      image : '../../assets/images/edit1.png',
    } , {
      icon : '../../assets/images/computer.png',
      image : '../../assets/images/computer1.png',
    },
     {
      icon : '../../assets/images/edit.png',
      image : '../../assets/images/edit1.png',
    },
    {
      icon : '../../assets/images/play-button.png',
      image : '../../assets/images/play1.png',
    },
    {
      icon : '../../assets/images/refresh.png',
      image : '../../assets/images/refresh1.png',
    }
  
  
  
  
  ];
  }

}
