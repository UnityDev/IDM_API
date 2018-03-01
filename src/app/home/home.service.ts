import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import {RequestOptions} from '@angular/http';

@Injectable()
export class HomeService {
  constructor(public http: HttpClient) {}
  createVideo() {
    this.http.get('http://localhost:4300/api/video').subscribe(data => {
      return null;
    });
  }
  addVariante(mandatory: string, optionnal: boolean, alternatives: string) {
    if ( optionnal === true) {
      this.http.post('http://localhost:4300/api/video',
        {
          'courseListIcon': 'flute',
          'optionnal': 'nice_peace',
          'alternatives': alternatives,
        })
        .subscribe(
          (val) => {
            console.log('POST call',
              val);
          },
          response => {
            console.log('', response);
          },
          () => {
            console.log('The POST observable is now completed.');
          });
    } else {
      this.http.post('http://localhost:4300/api/video',
        {
          'courseListIcon': mandatory,
          'alternatives': alternatives,
        })
        .subscribe(
          (val) => {
            console.log('POST call',
              val);
          },
          response => {
            console.log('', response);
          },
          () => {
            console.log('The POST observable is now completed.');
          });
    }
  }
}
