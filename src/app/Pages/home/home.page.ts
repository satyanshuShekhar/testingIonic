import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { imageData } from '../../../assets/Models/imagedata';
import imagedata from '../../../assets/json/imagedata.json' ;
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  data:  imageData[] = [];
  constructor(private router: Router) { }

  ngOnInit() {
    this.data = [...imagedata.imagedata];
    console.log(this.data);
  }

  cardDetail() {
    this.router.navigate(['/card-details'])
  }

  goToProfile() {
    this.router.navigate(['/profile'])
  }

}
