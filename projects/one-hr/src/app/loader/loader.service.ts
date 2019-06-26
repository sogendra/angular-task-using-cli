/**
 * This service is use to provide methods for loader.
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
/**---------------------------------------------------------------------- */
import { LoaderState } from './loader.model';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  
  private loaderSubject = new Subject<LoaderState>();
  
  public loaderState = this.loaderSubject.asObservable();

  constructor() { }

  /**
   * This method is use to show the loader. by emiting loader state object with true value of show property.
   */
  public show(): void {
    this.loaderSubject.next(<LoaderState>{ show: true });
  }

  /**
   * This method is use to hide the loader.by emiting loader state object with false value of show property.
   */
  public hide(): void {
    this.loaderSubject.next(<LoaderState>{ show: false });
  }
}

