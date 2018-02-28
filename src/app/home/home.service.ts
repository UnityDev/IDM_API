import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HomeService {
  constructor(public http: HttpClient) {}
  createVideo() {
      console.log(this.http.get('/api/video'));
  }
}
