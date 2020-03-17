import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { first, shareReplay, last } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DataService<T> {

    private apiUrl: String = environment.apiUrl;

    constructor(private http: HttpClient) { };

    public $find(url: string): Observable<T[]> {
        return this.http.get<any>(this.apiUrl + url)
            .pipe(
                first(),
                shareReplay()
            );
    }

    public $findOne(url: string, id: string): Observable<T> {
        return this.http.get<any>(`${this.apiUrl + url}/${id}`)
            .pipe(
                first(),
                shareReplay()
            );
    }

    public $add(url: string, payload: any): Observable<T> {
        return this.http.post<any>(this.apiUrl + url, payload)
            .pipe(
                last()
            );
    }

    public $update(url: string, id: string, payload: any): Observable<T> {
        return this.http.put<any>(`${this.apiUrl + url}/${id}`, payload)
            .pipe(
                last()
            );
    }

    public $delete(url: string, id: string): Observable<T> {
        return this.http.delete<any>(`${this.apiUrl + url}/${id}`)
            .pipe(
                last()
            );
    }
}
