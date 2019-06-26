/**
 * This component deals with the view of loader.
 */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
/**---------------------------------------------------------------------- */
import { LoaderState } from './loader.model';
import { LoaderService } from './loader.service';

@Component({
  selector: 'onehr-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit, OnDestroy {

  /**
   * Show property of loader.
   */
  private show = false;

  /**
   * Subscription  of loader component.
   */
  private subscription: Subscription;

  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
    this.subscription = this.loaderService.loaderState
      .subscribe(
        (state: LoaderState) => {
        this.show = state.show;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
