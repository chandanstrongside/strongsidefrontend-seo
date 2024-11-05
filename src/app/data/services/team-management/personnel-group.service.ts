import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PersonnelGroup } from '../../models/team-management';

@Injectable({
  providedIn: 'root'
})
export class PersonnelGroupService {

  constructor(
    private http: HttpClient,
  ) { }
  getAll(): Observable<PersonnelGroup[]> {
    return this.http.get<PersonnelGroup[]>('personnel-group');
  }
  get(id: string) {
    return this.http.get<PersonnelGroup>('personnel-group-get?Id=' + id).pipe(map(resp => resp));
  }
  search(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('personnel-group-search', param, httpOptions);
  }
  add(personnelGroup: PersonnelGroup) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('personnel-group-save', personnelGroup, httpOptions);
  }
  update(personnelGroup: PersonnelGroup) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put('personnel-group-update', personnelGroup, httpOptions);
  }
  getBasePositions(): Observable<any[]> {
    return this.http.get<any[]>('personnel-group-position-base');
  }
  getBase() {
    return this.http.get<PersonnelGroup>('personnel-group-position-base-account').pipe(map(resp => resp));
  };
  saveDefault(personalGroup: PersonnelGroup) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('personnel-group-save-default', personalGroup, httpOptions);
  }
}
