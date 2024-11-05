import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(
    private http: HttpClient,
  ) { }

  getMedia(id: string) {
    return this.http.get<any>('media-get-by-id?id=' + id).pipe(map(resp => resp));
  };

  all() {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>('media-get-all', httpOptions);
  };

  saveVideoFilter(model : any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>('media-save-video-filter', model, httpOptions);
  };

  getoffenseData(optionValue: string,) {
    return this.http.get<any>('offense-data?optionValue=' + optionValue).pipe(map(resp => resp));
  };

  SearchOffenseMedia(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post<any>('offense-media-filter', param, httpOptions);
  };

  getByReferenceForOffenseMedia(id?: string) {
    return this.http.get<any>('tag-get-by-reference-offense?id=' + id).pipe(map(resp => resp));
  };

  modifyOffenseMediaTag(tag: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>('tag-modify-offense-media', tag, httpOptions);
  };

}
