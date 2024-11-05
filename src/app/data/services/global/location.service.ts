import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  getLocationBySearchText(srchText: string, locationType: string) {
    return this.http.get<any[]>('get-location-by-search?srchText=' + srchText + '&locationType=' + locationType).pipe(map(resp => resp));
  };
  addLocation(location: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('save-location', location, httpOptions);
  };
  updateLocation(location: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('update-location', location, httpOptions);
  };

  markFavouriteStadium(favouriteStadium: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('is-stadium-favourite', favouriteStadium, httpOptions);
  };

  markFavouriteSchoolLocation(favouriteSchoolLocation: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('is-school-location-favourite', favouriteSchoolLocation, httpOptions);
  };

  markFavouritePracticeField(favouritePracticeField: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('is-practice-field-favourite', favouritePracticeField, httpOptions);
  };

  searchStadium(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('search-stadium', param, httpOptions);
  };

  searchSchoolLocation(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('search-school-location', param, httpOptions);
  };

  searchPracticeField(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('search-practice-field', param, httpOptions);
  };

  getLocationByIdAndType(id: string, locationType: string) {
    return this.http.get<any[]>('get-location?id=' + id + '&locationType=' + locationType).pipe(map(resp => resp));
  };
}
