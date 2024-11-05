import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UrlSharingService {

  constructor(private http: HttpClient) { }

  ConvertIntoTinyUrl(orginalUrl: string) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>('convert-into-tiny-url?orginalUrl=' + orginalUrl, httpOptions);
  };

  getOrginalUrl(code: string) {
    return this.http.get<any>('get-orginal-url?code=' + code).pipe(map(resp => resp));
  }

}
