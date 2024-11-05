import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { analytics } from 'firebase';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Drills } from '../../models/offense';

@Injectable({
  providedIn: 'root'
})
export class DrillsService {

  constructor(
    private http: HttpClient
  ) { }
  getAll(): Observable<Drills[]> {
    return this.http.get<Drills[]>('drills-all');
  };

  search(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('drills-Search', param, httpOptions);
  };

  get(id: string) {
    return this.http.get<Drills>('drills-get?id=' + id).pipe(map(resp => resp));
  };

  add(formData: any, file: any) {
    let requestData = {
      ID: parseInt(formData.id),
      name: formData.name,
      description: formData.description,
    }
    const formData1: any = new FormData();

    if (file != null && file != undefined && file != "") {
      formData1.append('fileName', file);
    }
    formData1.append('jsonData', JSON.stringify(requestData));
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': formData }) };
    return this.http.post('drills-save', formData1, httpOptions);
  };

  update(formData: any, file: any) {
    let requestData = {
      ID: formData.id,
      name: formData.name,
      description: formData.description,
    }
    const formData1: any = new FormData();

    if (file != null && file != undefined && file != "") {
      formData1.append('fileName', file);
    }
    formData1.append('jsonData', JSON.stringify(requestData));

    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': formData }) };
    return this.http.put('drills-update', formData1, httpOptions);
  };
}
