import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Document } from '../../models/media/index';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Document[]> {
    return this.http.get<Document[]>('documents-all');
  }
  get(id: string) {
    return this.http.get<Document>('documents-get?Id=' + id).pipe(map(resp => resp));
  }
  search(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('documents-search', param, httpOptions);
  }
  add(document: Document) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('document-save', document, httpOptions);
  }
  edit(document: Document) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('document-update', document, httpOptions);
  }
}