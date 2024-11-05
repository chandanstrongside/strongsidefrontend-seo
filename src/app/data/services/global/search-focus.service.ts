import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchFocusService {
  private modalOpenSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public modalOpen$: Observable<boolean> = this.modalOpenSubject.asObservable();

  constructor() { }

  setModalOpen(isOpen: boolean) {
    this.modalOpenSubject.next(isOpen);
  };
}
