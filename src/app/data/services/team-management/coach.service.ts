import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Coach } from '../../models/team-management/index';

@Injectable({
  providedIn: 'root'
})
export class CoachService {

  constructor(
    private http: HttpClient,

  ) { }
  allCoaches(): Observable<any[]> {
    return this.http.get<any[]>('all-coaches');
  }
  getAll(): Observable<Coach[]> {
    return this.http.get<Coach[]>('coach-all');
  }
  get(id: string) {
    return this.http.get<Coach>('coach-get/' + id).pipe(map(resp => resp));
  }
  search(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('coach-search', param, httpOptions);
  }
  add(coach: Coach) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('coach-save', coach, httpOptions);
  }
  update(coach: Coach) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put('coach-update', coach, httpOptions);
  };

  delete(id: string) {
    return this.http.delete<any>('coach-delete?id=' + id).pipe(map(resp => resp));
  };

  getOrgPromocode() {
    return this.http.get<any>('organization-promocode').pipe(map(resp => resp));
  };

  add_quick(coach: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('coach-save-quick', coach, httpOptions);
  };

  invite_coach(userId: string, email: string) {
    return this.http.get<any>('coach-invite?userId=' + userId + '&email=' + email).pipe(map(resp => resp));
  };

  getCoachLimitForPackge() {
    return this.http.get<any>('coach-limit');
  };
}
