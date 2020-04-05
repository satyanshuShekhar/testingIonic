import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userData: any;

  constructor() { }

  ngOnInit() {
    // var typeUserDat = typeof localStorage.getItem('userData');
    // console.log('type'+ typeUserDat);
     this.userData = JSON.parse(localStorage.getItem('userData'));
     console.log(this.userData);
  }

}
