import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffenseSearchService {
  public searchText: any = '';
  public content = new BehaviorSubject<any>(this.searchText);

  constructor(private http: HttpClient) { }

  setSearch(search: any) {
    this.content.next(search);
  }
  getSearch() {
    return this.content;
  }
}
