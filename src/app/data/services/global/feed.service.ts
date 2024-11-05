import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Feed } from '../../models/global';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(
    private http: HttpClient,
  ) { }
  save(feed: Feed) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('feed-save', feed, httpOptions);
  };
  allDashboard(feeds: any[]) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any[]>('feed-all-dashboard', feeds, httpOptions);
  };

  dashboardRecentlyViwedWidget(feeds: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>('feed-recently-viewed', feeds, httpOptions);
  };
}
