import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Patient } from './app/Patient';


@Injectable({
  providedIn: 'root',
})
export class PatserviceService {
  private url: string = 'http://localhost:8080/sprhospital/patient';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  
  constructor(private http: HttpClient) {}
  getpatientdetailsFromService(): Observable<Patient[]> {
    return this.http
      .get<Patient[]>(this.url + '/AllPatient')
      .pipe(retry(1), catchError(this.handleError));
  }

  getPatient(pid: any): Observable<Patient> {
    return this.http
      .get<Patient>(this.url + '/getPat/' + pid, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  register(patient: any): Observable<Patient> {
    console.log(patient);
    return this.http
      .post<Patient>(
        this.url + '/createPatient',
        JSON.stringify(patient),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  updatePatient(patient: Patient): Observable<Patient> {
    console.log(patient);
    return this.http
      .put<Patient>(
        this.url + '/updatePat',
        JSON.stringify(patient),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code : ${error.status} \n Error Message : ${error.message} `;
    }

    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}