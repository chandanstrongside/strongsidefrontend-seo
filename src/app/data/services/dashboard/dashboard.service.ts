import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Widget } from '../../models/dashboard/widget';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http: HttpClient,
  ) { }

  allWidgets(): Observable<Widget[]> {
    return this.http.get<Widget[]>('dashboard-widget-all');
  }
  usersWidgets(): Observable<Widget[]> {
    return this.http.get<Widget[]>('dashboard-widget-all-by-user');
  }
  saveUserWidget(model: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('dashboard-save-users-widget', model, httpOptions);
  }
  deleteWidget(widgetId: string) {
    return this.http.get<any>('dashboard-delete-user-widget?WidgetId=' + widgetId).pipe(map(resp => resp));
  }
  getFormationCount() {
    return this.http.get<number>('dashboard-get-formation-count').pipe(map(resp => resp));
  }
  getPlaylistCount() {
    return this.http.get<number>('dashboard-get-playlist-count').pipe(map(resp => resp));
  }
  getUserCount() {
    return this.http.get<number>('dashboard-get-users-count').pipe(map(resp => resp));
  }
  getFormationStackData(widgetId: any) {
    return this.http.get<any>('dashboard-get-formationstack-data?WidgetId=' + widgetId).pipe(map(resp => resp));
  }
  getFormation(widgetId: any) {
    return this.http.get<any>('dashboard-get-formation-data?WidgetId=' + widgetId).pipe(map(resp => resp));
  }
  getConcept(widgetId: any) {
    return this.http.get<any>('dashboard-get-concept-data?WidgetId=' + widgetId).pipe(map(resp => resp));
  }
  getImageData(widgetId: any) {
    return this.http.get<any>('dashboard-get-image-data?WidgetId=' + widgetId).pipe(map(resp => resp));
  }
  // getVideoData(filetrBy: string, playListId : string, videoId : string) {
  //   return this.http.get<any>('dashboard-get-video-data?filetrBy=' + filetrBy + '&playListId=' + playListId + '&videoId=' + videoId).pipe(map(resp => resp));
  // }
  getVideoData(model: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>('dashboard-get-video-data', model, httpOptions);
  };
  getDocumentData(widgetId: any) {
    return this.http.get<any>('dashboard-get-document-data?WidgetId=' + widgetId).pipe(map(resp => resp));
  }
  getCoachPlayer(widgetId: any) {
    return this.http.get<any>('dashboard-get-coach-player?WidgetId=' + widgetId).pipe(map(resp => resp));
  }
  getInstall(widgetId: any) {
    return this.http.get<any>('dashboard-get-install-player?WidgetId=' + widgetId).pipe(map(resp => resp));
  }
  getScrolableCard() {
    return this.http.get<any>('dashboard-get-scrolable-card').pipe(map(resp => resp));
  }
  getPlayerAssignedVideo() {
    return this.http.get<any>('dashboard-get-player-assigned-videos').pipe(map(resp => resp));
  }
  getFavouriteLocation() {
    return this.http.get<any>('favourite-location').pipe(map(resp => resp));
  };
  getPlayerQuestion(): Observable<any[]> {
    return this.http.get<any[]>('player-questions');
  };
  getPlayerAssignedMedia() {
    return this.http.get<any>('dashboard-get-player-assigned-medias').pipe(map(resp => resp));
  };
  getPlayerMeasurementProfile(): Observable<any[]> {
    return this.http.get<any[]>('player-measurement-profile');
  };
  updatePlayerMeasurementProfile(model: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('update-player-measurement-profile', model, httpOptions);
  }
  //*************dashboard video modal **********************/
  updateVideoModal(model: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('dashboard-update-video-modal-data', model, httpOptions);
  }
  getVideoModalData(playlistVideoId: any) {
    return this.http.get<any>('dashboard-get-video-modal-data?playlistVideoId=' + playlistVideoId).pipe(map(resp => resp));
  }
  removeVideoTagData(playlistVideoId: string, tagString: string, isTag: boolean) {
    return this.http.get<any>('dashboard-remove-video-tag-data?playlistVideoId=' + playlistVideoId + '&tagString=' + tagString + '&isTag=' + isTag).pipe(map(resp => resp));
  }
}
