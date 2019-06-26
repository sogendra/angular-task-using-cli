/**
 * This service is used to fetch data for languages drop down.
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
/**---------------------------------------------------------------------- */
import { Language } from './language.model';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {

    private baseUrl: string = "/languages";

    constructor(private httpClient: HttpClient) { }

    /**
     * This method is use to fetch all languages from server using HttpClient.
     */
    public getAllLanguages(): Observable<Language[]> {
        return this.httpClient.get<Language[]>(this.baseUrl);
    }
}