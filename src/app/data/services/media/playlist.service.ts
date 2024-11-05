import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Playlist } from '../../models/media';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(
    private http: HttpClient,
  ) { }
  all(): Observable<Playlist[]> {
    return this.http.get<Playlist[]>('playlist-all');
  }

  dashboardVideoByPlaylist(id: string) {
    return this.http.get<any[]>('playlist-dashboard-Video-by-playlist?id=' + id).pipe(map(resp => resp));
  }

  getVideoByPlaylist(id: string, columnSetId: string) {
    return this.http.get<any[]>('playlist-get-Video-byId?id=' + id + '&columnSetId=' + columnSetId).pipe(map(resp => resp));
  }

  saveAnnotation(data: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('save-video-annotation', data, httpOptions);
  };

  deleteAnnotation(id: string) {
    return this.http.get<any[]>('delete-video-annotation?id=' + id).pipe(map(resp => resp));
  }

  allVideos() {
    return this.http.get<any[]>('playlist-get-all-video').pipe(map(resp => resp));
  }

  getAllSeason() {
    return this.http.get<any[]>('all-season').pipe(map(resp => resp));
  };

  saveGamePlayList(formData: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': formData }) };
    return this.http.post('game-playlist-save', formData, httpOptions);
  };

  getAllPlayList() {
    return this.http.get<any[]>('all-playlist').pipe(map(resp => resp));
  };

  search(searchModel: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('search-playlist', searchModel, httpOptions);
  };

  searchGamePlaylist(searchModel: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('search-game-playlist', searchModel, httpOptions);
  };


  getColumnSet() {
    return this.http.get<any[]>('playlist-get-columnset').pipe(map(resp => resp));
  }

  getColumnBySet(columnSetId: string) {
    return this.http.get<any[]>('playlist-get-column-by-set?columnSetId=' + columnSetId).pipe(map(resp => resp));
  }

  getVideoBreakdownBySet(columnSetId: string, clips: any[]) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('playlist-get-video-breakdown-by-set/' + columnSetId, clips, httpOptions);
  }

  getColumnForEdit(columnSetId: string) {
    return this.http.get<any[]>('playlist-get-column-for-edit?columnSetId=' + columnSetId).pipe(map(resp => resp));
  }

  updateColumnSet(columnSetId: string, model: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('playlist-update-column-set/' + columnSetId, model, httpOptions);
  }

  addColumnSet(columnSetRequest: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('breakdownSet-save/', columnSetRequest, httpOptions);
  };

  saveVideoBreakdownData(columnSetId: string, model: any[]) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('playlist-save-breakdown-data/' + columnSetId, model, httpOptions);
  }
}