import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DepthchartService {

  constructor(
    private http: HttpClient
  ) { }
  get(personnelGroupId?: string) {
    return this.http.get<any>('depth-chart-get?personnelGroupId=' + personnelGroupId).pipe(map(resp => resp));
  };
  save(positionId: string, playerId: string) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('depth-chart-save?positionId=' + positionId + '&playerId=' + playerId, httpOptions);
  };
  removePlayerPosition(playerId: string) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('depth-chart-remove-position?playerId=' + playerId, httpOptions);
  };
}
