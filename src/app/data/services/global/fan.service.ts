import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FanService {

  constructor(
    private http: HttpClient,
  ) { }
  checkPlayerLink(email: string) {
    return this.http.get<any>('fan-accont-link-check?email=' + email).pipe(map(resp => resp));
  };
  requestPlayerLink(id: string, playerId: string) {
    return this.http.get('fan-accont-link-request?id=' + id + '&playerId=' + playerId).pipe(map(resp => resp));
  };
  search(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('fan-accont-search', param, httpOptions);
  };
  get(id: string) {
    return this.http.get<any>('fan-accont-get?id=' + id).pipe(map(resp => resp));
  };
  approvePlayerLink(id: string) {
    return this.http.get<any>('fan-accont-link-approved?id=' + id).pipe(map(resp => resp));
  };
  inviteFan(model: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post<any>('fan-accont-invite', model, httpOptions);
  };
  save(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post<any>('fan-accont-register', param, httpOptions);
  };
  inviteFanByMail(model: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post<any>('fan-invite-mail', model, httpOptions);
  };
}
