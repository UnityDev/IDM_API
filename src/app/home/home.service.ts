import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import {Headers} from '@angular/http';
import {RequestOptions} from '@angular/http';

@Injectable()
export class HomeService {
  constructor(public http: HttpClient) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
  }
  createVideo() {
    this.http.get('http://localhost:4300/api/video').subscribe(data => {
      return null;
    });
  }
  addVariante(mandatory: string, optionnal: boolean, alternatives: string) {
    if ( optionnal === true) {
      this.http.post('http://localhost:4300/api/video',
        {
          'mandatory': mandatory,
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
          'mandatory': mandatory,
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
