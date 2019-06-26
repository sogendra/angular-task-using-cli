/**
 * This component deals with the view of Home page.
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'onehr-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private pageTitle: string = "Welcome";

  constructor() { }

  ngOnInit() {
  }
  
}
