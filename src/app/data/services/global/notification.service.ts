import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private http: HttpClient,
  ) { }
  all(limit: number) {
    return this.http.get<any>('notification-all?limit=' + limit).pipe(map(resp => resp));
  };
  view_all() {
    return this.http.get<any>('notification-view-all').pipe(map(resp => resp));
  };
  save(notification: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('notification-save', notification, httpOptions);
  };
  view(id: string) {
    return this.http.get<any>('notification-view?id=' + id).pipe(map(resp => resp));
  };
}
