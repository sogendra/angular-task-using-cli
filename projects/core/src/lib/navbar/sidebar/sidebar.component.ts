/**
 * This component deals with the view of sidebar.
 */
import { Component, OnInit, Input } from '@angular/core';

import { Navbar } from '../navbar.model';

@Component({
  selector: 'task-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() public menuData: Navbar[];

  constructor() { }

  ngOnInit() {
  }

}
