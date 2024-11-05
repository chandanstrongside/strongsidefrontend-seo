import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Organization } from '../../models/global/organization';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(
    private http: HttpClient,
  ) { }

  all() {
    return this.http.get<any[]>('organization-all').pipe(map(resp => resp));
  };
  get() {
    return this.http.get<any[]>('organization-get').pipe(map(resp => resp));
  };

  uploadFile(formData: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': formData }) };
    return this.http.post('organization-imgupload', formData, httpOptions);
  };
  update(model: Organization) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('organization-update', model, httpOptions);
  }
  organizationsAllWithTeam() {
    return this.http.get<any[]>('organization-all-with-teams').pipe(map(resp => resp));
  };

  freePlayBookRequest(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('free-playbook-request', param, httpOptions);
  };
}
