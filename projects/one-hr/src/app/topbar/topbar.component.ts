/**
 * This component deals with the view of Topbar.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
/**---------------------------------------------------------------------- */
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'onehr-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  /**
   * Page title of topbar component
   */
  private pageTitle = 'OneHr';

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }
  
  /**
   * Gets whether user is logged in
   */
  private get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  /**
   * Gets user name
   */
  private get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    else {
      return '';
    }
  }

  /**
   * This Method is use to log out user and redirect to home page.
   */
  private logOut(): void {
    this.authService.logout();
    this.router.navigateByUrl('/home');
  }
}
