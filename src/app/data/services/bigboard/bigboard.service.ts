import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BigboardService {

  constructor(
    private http: HttpClient
  ) { }
  search(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('maxpreps-players-search', param, httpOptions);
  };
  allSchools(): Observable<string[]> {
    return this.http.get<string[]>('maxpreps-players-schools-all');
  };
  allYears(): Observable<string[]> {
    return this.http.get<string[]>('maxpreps-players-graduation-year-all');
  };
  target(id: string, needId?: string) {
    return this.http.get<any>('maxpreps-players-target?id=' + id + '&needId=' + needId).pipe(map(resp => resp));
  };
  requestInfo(id: string) {
    return this.http.get<any>('maxpreps-players-req-info?id=' + id).pipe(map(resp => resp));
  };
  allPositions(): Observable<string[]> {
    return this.http.get<string[]>('maxpreps-players-position');
  };
  allStates(): Observable<string[]> {
    return this.http.get<string[]>('maxpreps-players-state');
  };
  searchTarget(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('maxpreps-players-search-target', param, httpOptions);
  };
  add(model: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('maxpreps-players-add', model, httpOptions);
  };
  update(model: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.put('maxpreps-players-update', model, httpOptions);
  };
  getTarget(id: string) {
    return this.http.get<any>('maxpreps-players-target-get?id=' + id).pipe(map(resp => resp));
  };

  getRegionWisesSchoolCount(needId?: string) {
    return this.http.get<any>('bigboards-regions?needId=' + needId).pipe(map(resp => resp));
  };

  searchPlayers(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('bigboards-players-search', param, httpOptions);
  };

  getSchoolByRegionCode(r_code: string, needId?: string) {
    return this.http.get<any>('bigboards-school-by-region?r_code=' + r_code + '&needId=' + needId).pipe(map(resp => resp));
  };

  getSchools() {
    return this.http.get<any>('schools-all');
  };

  getProspectById(id?: string) {
    return this.http.get<any>('prospet-players-view?id=' + id).pipe(map(resp => resp));
  };
 
  updateMobile(obj: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>('update-phone', obj, httpOptions);
  }

}
