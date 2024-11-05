import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DefensePersonnelGroup } from '../../models/defense';

@Injectable({
  providedIn: 'root'
})
export class DefensePersonnelGroupService {

  constructor(
    private http: HttpClient,
  ) { }
  // getAll(): Observable<DefensePersonnelGroup[]> {
  //   return this.http.get<DefensePersonnelGroup[]>('personnel-group');
  // }
  // get(id: string) {
  //   return this.http.get<DefensePersonnelGroup>('personnel-group-get?Id=' + id).pipe(map(resp => resp));
  // }
  // search(param: any) {
  //   const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
  //   return this.http.post('personnel-group-search', param, httpOptions);
  // }
  // add(personnelGroup: DefensePersonnelGroup) {
  //   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  //   return this.http.post('personnel-group-save', personnelGroup, httpOptions);
  // }
  // update(personnelGroup: DefensePersonnelGroup) {
  //   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  //   return this.http.put('personnel-group-update', personnelGroup, httpOptions);
  // }
  // getBasePositions(): Observable<any[]> {
  //   return this.http.get<any[]>('personnel-group-position-base');
  // }
  getBase() {
    return this.http.get<DefensePersonnelGroup>('defense-personnel-group-position-base-account').pipe(map(resp => resp));
  };
  saveDefault(personnelGroup: DefensePersonnelGroup) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('defense-personnel-group-save-default', personnelGroup, httpOptions);
  }

  getAllDefensePersonalGroup() {
    return this.http.get<DefensePersonnelGroup[]>('defense-personnel-group-list').pipe(map(resp => resp));
  };

  getAllDefenseAlignment(){
    return this.http.get<any[]>('defense-alignment');
  }
}
