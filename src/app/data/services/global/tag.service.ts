import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(
    private http: HttpClient,
  ) { }

  all(): Observable<any[]> {
    return this.http.get<any[]>('tag-all');
  };

  getTagName(searchText: string, prefix: string) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any[]>('tag-get-searchText?searchText=' + searchText + '&prefix=' + prefix, httpOptions);
  };

  tagByOriginId(originId: string) {
    return this.http.get<any>('tag-get-origin-id?originId=' + originId);
  };

  save(tag: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>('tag-save', tag, httpOptions);
  };

  modify(tag: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>('tag-modify', tag, httpOptions);
  };

  globalSearchByTag(searchText: string[]) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>('tag-global-search', searchText, httpOptions);
  };

  getByReference(id?: string) {
    return this.http.get<any>('tag-get-by-reference?id=' + id).pipe(map(resp => resp));
  };

  getTagNamePublic(searchText: string, prefix: string, accountId: string) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any[]>('tag-get-searchText-public?searchText=' + searchText + '&prefix=' + prefix + '&accountId=' + accountId, httpOptions);
  };

  globalSearchByTagPublic(searchableData: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>('tag-global-search-public', searchableData, httpOptions);
  };

  saveTagSearch(tagSearchValue: string) {
    return this.http.get<any>('save-tag-search?tagSearchValue=' + tagSearchValue).pipe(map(resp => resp));
  };

  getSavedSearchTag() {
    return this.http.get<any>('get-saved-tag-search').pipe(map(resp => resp));
  };

  removeSearchedTag(id?: string) {
    return this.http.delete<any>('delete-searched-tag?id=' + id).pipe(map(resp => resp));
  };

  deleteTag(tagName: string, originId: string) {
    return this.http.get<any>('delete-tag?tagName=' + tagName + '&originId=' + originId).pipe(map(resp => resp));
  };

  saveTagRule(tagRule: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>('save-tagRule', tagRule, httpOptions);
  };

  updateTagRule(tagRule: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>('update-tagRule', tagRule, httpOptions);
  };

  getTagRule(id?: string) {
    return this.http.get<any>('get-tagRule?id=' + id).pipe(map(resp => resp));
  };

  searchTagRule(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('search-tagRule', param, httpOptions);
  };
}
