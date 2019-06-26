/**
 * This is a root component class of application.
 */
import { Component } from '@angular/core';
import { Navbar } from 'projects/core/src/lib/navbar/navbar.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
   * This sidebar array is use to set path and routes for sidebar resusable component.
   */
  public sideBar: Navbar[];

  constructor(){}

  ngOnInit(): void {
    this.setSidebar(); 
  }

  /**
   * This method is use to set sidebar path and route names.
   */
  private setSidebar(): void {
    
    this.sideBar = [
      {
        path: '/home',
        routeName: 'Home'
      },
      {
        path: '/emp',
        routeName: 'Employees'
      },
      {
        path: '/emp/add',
        routeName: 'Add new Employee'
      },
      {
        path: '/contact-us',
        routeName: 'Contact Us'
      }
    ];
  }
}
