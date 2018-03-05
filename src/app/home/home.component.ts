import { Component, OnInit } from '@angular/core';
import {HomeService} from './home.service';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private homeservice: HomeService) { }

  mandatory: any = 'flute';
  optionnal: any;
  alternatives: any;
  videoDisplayed: any;
  srcAlternatives: any;
  @ViewChild('videoPlayer') videoplayer: any;

  ngOnInit() {
    this.alternatives = 'fonte';
    this.createVideoRandom();
    this.videoDisplayed = 'http://localhost:4300/videosCreated/videoRandom.mp4';
    this.srcAlternatives = 'http://localhost:4300/thumbnails/alternative-thumbnailv31.jpg';
  }

  private createVideoRandom() {
    this.homeservice.createVideo();
  }

  addVariante(event: any) {
    this.homeservice.addVariante(this.mandatory, this.optionnal, this.alternatives);
    setTimeout(() => this.videoDisplayed = 'http://localhost:4300/videosCreated/videoCreate.mp4', 2000);
    setTimeout(() =>this.videoplayer.nativeElement.load(), 2000);
    setTimeout(() =>this.videoplayer.nativeElement.play(), 2000);
  }

  updateThumbnail() {
    if(this.alternatives == 'fonte') {
      this.srcAlternatives = 'http://localhost:4300/thumbnails/alternative-thumbnailv31.jpg';
    } else {
      this.srcAlternatives = 'http://localhost:4300/thumbnails/alternative-thumbnailv32.jpg';
    }
    
  }
}
