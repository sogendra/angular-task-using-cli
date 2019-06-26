/**
 * This component deals with the view of login page.
 */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
/**---------------------------------------------------------------------- */
import { AuthService } from './auth.service';

@Component({
  selector: 'onehr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /**
   * Login form of login component
   */
  private loginForm: FormGroup;

  /**
   * Error message of login component
   */
  private errorMessage: string;

  /**
   * Page title of login component
   */
  private pageTitle: string = 'Log In';

  constructor(private formBuilder: FormBuilder,
    private route: Router,
    private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  /**
   * This method is used to get login form controls.
   */
  private get control(): any {
    return this.loginForm.controls;
  }

  /**
   * This method is use to login the user.
   */
  private login(): void {

    if (this.loginForm && this.loginForm.valid) {
      const userName = this.control.userName.value;
      const password = this.control.password.value;
      this.authService.login(userName, password);

      if (this.authService.redirectUrl) {
        this.route.navigateByUrl(this.authService.redirectUrl);
      } else {
        this.route.navigate(['/emp']);
      }

    }

  }

}
