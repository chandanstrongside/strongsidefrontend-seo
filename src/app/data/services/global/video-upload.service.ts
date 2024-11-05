import { HttpClient, HttpEventType, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideoUploadService {

  constructor(private http: HttpClient) { }

  getAllEvent() {
    return this.http.get<any[]>('gameEvent-get-all');
  };

  getPlaylistNameBasedOnEventAndCategory(gameEventId: string, category: string) {
    return this.http.get<any>('playlist-get-by-event-category?gameEventId=' + gameEventId + '&category=' + category).pipe(map(resp => resp));
  };

  uploadFiles(formData: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': formData }) };
    return this.http.post('video-upload', formData, httpOptions);
  };

  savePlaylist(playlist: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>('save-playlist', playlist, httpOptions);
  };

  saveHudlPlaylist(formData: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': formData }) };
    return this.http.post<any>('save-hudl-playlist', formData, httpOptions);
  };

  deletePlaylistVideo(fileSequence: string) {
    return this.http.delete<any>('delete-playlist-video?fileSequence=' + fileSequence).pipe(map(resp => resp));
  };
}
