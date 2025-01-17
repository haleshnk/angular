import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()

export class FormPosterService{
    private url = "http://localhost:8900/user";

    constructor(private http: HttpClient) {}

    employForm(employee): Observable<any[]>{
        return this.http.post<any[]>(this.url,employee)
    }
}