import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FacebookService {

  constructor(private http: HttpClient) { }

  postInToFacebook(message: string, imagePath: string) {
    return this.http.get('post-into-facebook?message=' + message + '&imagePath=' + imagePath).pipe(map(resp => resp));
  };

  getTinyUrl(orginalUrl: any) {
    return this.http.get<any>('convert-into-tiny?orginalUrl=' + orginalUrl).pipe(map(resp => resp));
  };
}
