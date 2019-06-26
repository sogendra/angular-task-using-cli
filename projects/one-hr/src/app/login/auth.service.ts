/**
 * This service is use to authorise the user.
 */
import { Injectable } from '@angular/core';
/**---------------------------------------------------------------------- */
import { User } from './user.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    public redirectUrl: string;
    public currentUser: User;

    public get isLoggedIn(): boolean {
        return !!this.currentUser;
    }

    constructor(){ }

    /**
     * This method is use to set current user data for further routing.
     * @param userName 
     * @param password 
     */
    public login(userName: string, password: string): void{
            this.currentUser = {
                userName: userName,
                password: password
            }
    }

    /**
     * This method makes currentuser null so the user can't access the unauthorized routes.
     */
    public logout(): void {
        this.currentUser = null;
    }

}