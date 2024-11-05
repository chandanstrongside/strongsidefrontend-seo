import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FootballMindService {

  constructor(
    private http: HttpClient,
  ) { }

  save(footballMind: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('create-football-mind', footballMind, httpOptions);
  };

  getAll() {
    return this.http.get<any>('all-footballMind').pipe(map(resp => resp));
  }

  getBySearchText(srchText: string) {
    return this.http.get<any[]>('football-mind-srchText?srchText=' + srchText).pipe(map(resp => resp));
  };

  search(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('search-footballMind', param, httpOptions);
  };

  get(id: string) {
    return this.http.get<any>('get-footballMind?id=' + id).pipe(map(resp => resp));
  };

  update(model: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.put('update-football-mind', model, httpOptions);
  };

  delete(id: string) {
    return this.http.delete<any>('football-mind-delete?id=' + id).pipe(map(resp => resp));
  };

  getProfileData(id: string) {
    return this.http.get<any>('get-footballMind-profile?id=' + id).pipe(map(resp => resp));
  };

  getPublicAcessProfileData(user: string) {
    return this.http.get<any>('get-footballMind-public-profile?user=' + user).pipe(map(resp => resp));
  };

  cardViewSearch(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('search-footballMind-card-view', param, httpOptions);
  };
}
