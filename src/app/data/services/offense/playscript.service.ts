import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PlayScript } from '../../models/offense';

@Injectable({
  providedIn: 'root'
})
export class PlayscriptService {

  constructor(private http: HttpClient
  ) { }
  getAll(): Observable<PlayScript[]> {
    return this.http.get<PlayScript[]>('play-script-all');
  };
  search(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('play-script-search', param, httpOptions);
  };
  get(id: string) {
    return this.http.get<any>('play-script-get?id=' + id).pipe(map(resp => resp));
  };
  add(playScript: PlayScript) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('play-script-save', playScript, httpOptions);
  };
  update(playScript: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<any>('play-script-update', playScript, httpOptions);
  };

  save(playScript: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>('play-script-save', playScript, httpOptions);
  };

  deleteMultiple(ids: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('playscript-delete-multiple', ids, httpOptions);
  };

  share(shareData: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('playscript-share', shareData, httpOptions);
  };
}
