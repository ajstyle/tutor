import { Component, OnInit } from '@angular/core';
import {NavbarService} from '../services/navbar.service' ;
import {ResponsiveService} from '../services/responsive.service' ;
@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {
  isMobile: boolean ;
  constructor(public nav: NavbarService , public responsiveService: ResponsiveService) {this.nav.hide(); }

 features = [] ; 

  ngOnInit() {
    this.onResize(event);
    // this.responsiveService.checkWidth();
    this.responsiveService.checkWidth();
    this.features = [{
      icon : '../../assets/images/angle.png',
      image : '../../assets/images/angle1.png',
      heading : 'High Quality Video Chat',
      desc : 'Speak one on one and face'
    } , {
      icon : '../../assets/images/edit.png',
      image : '../../assets/images/edit1.png',
      heading : 'Shared Whiteboard',
      desc : 'Speak one on one and face'

    } , {
      icon : '../../assets/images/computer.png',
      image : '../../assets/images/computer1.png',
      heading : 'Live Document Editor',
      desc : 'Speak one on one and face'

    },
     {
      icon : '../../assets/images/edit.png',
      image : '../../assets/images/edit1.png',
      heading : 'Collaborative Code Editor',
      desc : 'Speak one on one and face'


    },
    {
      icon : '../../assets/images/play-button.png',
      image : '../../assets/images/play1.png',
      heading : 'Record Live Lessons',
      desc : 'Speak one on one and face'

    },
    {
      icon : '../../assets/images/refresh.png',
      image : '../../assets/images/refresh1.png',
      heading : 'Capture Whiteboard To PDF',
      desc : 'Speak one on one and face'
    }

  ];
  }
  onResize(event) {
    console.log(event) ;
    this.responsiveService.checkWidth();

    this.responsiveService.getMobileStatus().subscribe(isMobile => {
      this.isMobile = isMobile;
      console.log('this.isMobile=======', this.isMobile) ; 
    });
  }
}
