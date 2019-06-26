/**
 * This Guard is use to prevent unauthorised access of route.
 */
import { CanActivate, CanLoad, Router, ActivatedRouteSnapshot, RouterStateSnapshot, Route } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
/**---------------------------------------------------------------------- */
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

    constructor(private authService: AuthService,
                private router: Router){}

    public canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            return this.checkLoggedIn(state.url);
    }

    public canLoad(route: Route): boolean {
        return this.checkLoggedIn(route.path);
    }

    /**
     * This method is used to check loggin state.
     * @param url 
     */
    private checkLoggedIn(url: string): boolean {
        if(this.authService.isLoggedIn){
            return true;
        }

        this.authService.redirectUrl = url;
        this.router.navigate(['/login']);
        return false;
    }
}