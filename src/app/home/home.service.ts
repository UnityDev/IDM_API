import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HomeService {
  constructor(public http: HttpClient) {}
  createVideo() {
    this.http.get('http://localhost:4300/api/video').subscribe(data => {
      return null;
    });
  }
  addVariante() {
    this.http.get('/api/video');
  }
}
