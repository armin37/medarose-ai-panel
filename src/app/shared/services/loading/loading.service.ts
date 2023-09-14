import {Injectable} from '@angular/core';
import {BehaviorSubject, defer, Observable, of} from "rxjs";
import {concatMap, finalize, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingIndicators: { [key: string]: BehaviorSubject<boolean> } = {};

  constructor() {
  }

  createLoader(...identifier: string[]) {
    identifier.forEach(key => {
      this.loadingIndicators[key] = new BehaviorSubject<boolean>(false);
    })
  }

  showLoaderUntilComplete<T>(obs$: Observable<T>, identifier: string): Observable<T> {
    this.loadingOn(identifier)

    return obs$.pipe(
      finalize(() => this.loadingOff(identifier))
    )
  }

  loadingOn(identifier: string) {
    if (this.loadingIndicators[identifier]) {
      this.loadingIndicators[identifier].next(true);
    }
  }

  loadingOff(identifier: string) {
    if (this.loadingIndicators[identifier]) {
      this.loadingIndicators[identifier].next(false);
    }
  }

  getLoader(identifier: string): Observable<boolean> {
    return this.loadingIndicators[identifier].asObservable();
  }
}
