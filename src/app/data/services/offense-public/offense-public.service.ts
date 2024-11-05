import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OffensePublicService {

  constructor(
    private http: HttpClient,
  ) { }

  publicConceptSearch(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('concept-public-search', param, httpOptions);
  };

  getPublicConceptView(id: string) {
    return this.http.get<any>('public-concept-get?id=' + id).pipe(map(resp => resp));
  };

  publicFormationSetSearch(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('formation-stack-public-search', param, httpOptions);
  };

  getPublicFormationSetView(id: string) {
    return this.http.get<any>('public-formationset-get?id=' + id).pipe(map(resp => resp));
  };

  publicFormationSearch(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('formation-public-search', param, httpOptions);
  };

  getPublicFormationView(id: string) {
    return this.http.get<any>('public-formation-get?id=' + id).pipe(map(resp => resp));
  };

  publicPlaySearch(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('offense-plays-public-search', param, httpOptions);
  };

  getPublicPlayView(id: string) {
    return this.http.get<any>('public-offense-plays-get?id=' + id).pipe(map(resp => resp));
  };

  getPublicModifierView(id: string) {
    return this.http.get<any>('public-modifier-get?id=' + id).pipe(map(resp => resp));
  };

  publicModifierSearch(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('modifier-public-search', param, httpOptions);
  };

  saveFreePlayBookAccessEmails(email: string) {
    return this.http.get<any>('free-playbook-acess-email?email=' + email).pipe(map(resp => resp));
  };

  getRelatedByPlays(id: string, accountId: string) {
    return this.http.get<any>('offensive-plays-related-public?id=' + id + '&accountId=' + accountId).pipe(map(resp => resp));
  };
}
