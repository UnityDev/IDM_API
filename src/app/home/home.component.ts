import { Component, OnInit } from '@angular/core';
import {HomeService} from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private homeservice: HomeService) { }

  mandatory: any;
  optionnal: any;
  alternatives: any;

  ngOnInit() {
    this.createVideoRandom();
  }

  private createVideoRandom() {
    this.homeservice.createVideo();
  }

  addVariante() {
    this.homeservice.addVariante(this.mandatory, this.optionnal, this.alternatives);
  }
}
