import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ClipboardService {

  constructor(
    private http: HttpClient,
  ) { }
  getAllClips(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post<any[]>('clipboard-all-clip', param, httpOptions);
  };
  uploadClips(formData: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': formData }) };
    return this.http.post<any>('clipboard-upload-clip', formData, httpOptions);
  };
  uploadMultipleClips(formData: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': formData }) };
    return this.http.post<any>('clipboard-upload-multiple-clip', formData, httpOptions);
  };
  getDefaultClipboard() {
    return this.http.get<any[]>('clipboard-default').pipe(map(resp => resp));
  };
  getAllClipboard(searchText: string) {
    return this.http.get<any[]>('clipboard-all?searchText=' + searchText).pipe(map(resp => resp));
  };
  getClipboard(id: string) {
    return this.http.get<any>('clipboard-get?id=' + id).pipe(map(resp => resp));
  };
  clipboardSave(model: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post<any>('clipboard-save', model, httpOptions);
  };
  clipboardUpdate(model: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post<any>('clipboard-update', model, httpOptions);
  };
  saveClip(clipId: string, clipboardId?: string) {
    return this.http.get<any>('clipboard-save-clip?clipId=' + clipId + '&clipboardId=' + clipboardId).pipe(map(resp => resp));
  };
  myClip() {
    return this.http.get<any>('clipboard-my-clip').pipe(map(resp => resp));
  };
  myClipByClipboard(clipboardId: string) {
    return this.http.get<any>('clipboard-my-clip-by-clipboard?clipboardId=' + clipboardId).pipe(map(resp => resp));
  };
  searchClips(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('clipboard-search-clips', param, httpOptions);
  };
  updateClipTags(model: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('clipboard-update-clip-tag', model, httpOptions);
  };
  deleteClip(id: string) {
    return this.http.get<any>('clipboard-delete-clip?id=' + id).pipe(map(resp => resp));
  };
   getClip(id: string) {
    return this.http.get<any>('clipboard-get-clip?id=' + id).pipe(map(resp => resp));
  };
  clipLink(model: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('clipboard-link-clip', model, httpOptions);
  };
  searchOrigin(clipId: string, searchText: string) {
    return this.http.get<any>('clipboard-search-origin?clipId=' + clipId + '&searchText=' + searchText).pipe(map(resp => resp));
  };
}
