import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Player } from '../../models/team-management/index';
import { DesktopSetting } from '../../models/settings/desktop-setting';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient
  ) { }
  get(id?: string) {
    return this.http.get<any>('profile?id=' + id).pipe(map(resp => resp));
  };

  getPublic(user_Name: string) {
    return this.http.get<any>('profile-public?user_Name=' + user_Name).pipe(map(resp => resp));
  };

  uploadFile(formData: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': formData }) };
    return this.http.post('profile-imgupload', formData, httpOptions);
  };

  updateSocialLink(updateType: string, link: string) {
    return this.http.get<any>('profile-update-social-link?updateType=' + updateType + '&link=' + link).pipe(map(resp => resp));
  };

  setMediaAsPublic(id?: string) {
    return this.http.get<any>('profile-media-set-public?id=' + id).pipe(map(resp => resp));
  };

  updateProfile(model: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('profile-update', model, httpOptions);
  };

  updateSocialLinkS(model: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>('update-social-links', model, httpOptions);
  };

  getOrg(id?: string) {
    return this.http.get<any>('get-organization-details').pipe(map(resp => resp));
  };

  updateAccounOrgDetails(model: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>('update-organization-details', model, httpOptions);
  };

  sendReqForOwnNumber(comment?: string) {
    return this.http.get<any>('req-own-no?comment=' + comment).pipe(map(resp => resp));
  };

  desktopSettings(desktopSetting: DesktopSetting) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>('audio-setting-save', desktopSetting, httpOptions);
  };

  getdesktopSettings() {
    return this.http.get<any>('audio-setting-get');
  };

  SaveSignature(signature?: string) {
    return this.http.get<any>('signature-save?signature=' + signature).pipe(map(resp => resp));
  };

  uploadOrganizationLogo(formData: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': formData }) };
    return this.http.post('organization-logo-upload', formData, httpOptions);
  };

  searchOrganization(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('organization-search', param, httpOptions);
  };

  updateOrganization(organization: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('organization-all-details-update', organization, httpOptions);
  };

  emailVerification(id: string) {
    return this.http.get<any>('organization-email-verification?id=' + id).pipe(map(resp => resp));
  };

  getById(id: string) {
    return this.http.get<any>('organization-details-get?id=' + id).pipe(map(resp => resp));
  };

  // getSignUpOrg() {
  //   return this.http.get<any>('organization-sign-up-graph-data');
  // };

  orgNotes(orgNotes: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('organization-notes', orgNotes, httpOptions);
  };

  getOrgNotesById(id: string) {
    return this.http.get<any>('organization-notes-get?id=' + id).pipe(map(resp => resp));
  };

  getCombinedGraphSignUpOrgFreePlaybookReq() {
    return this.http.get<any>('signup-freeplaybookreq-combinedgraph');
  };

  orgOwnerSave(orgNotes: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('add-organization-owner', orgNotes, httpOptions);
  };

  getOrgOwnerById(id: string) {
    return this.http.get<any>('get-organization-owner?id=' + id).pipe(map(resp => resp));
  };

}
