import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/enviroment.development';
import { Observable, catchError, throwError } from 'rxjs';
import { Cursos } from 'src/app/models/cursos';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  apiURL = environment.apiurl;
  private http = inject(HttpClient);

  getAllCourses():Observable<Cursos[]>  {
    return this.http.get<Cursos[]>(`${this.apiURL}`+`/categorias`, ).pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) { if( err.error instanceof ErrorEvent ) { console.warn('Cliente: ', err.message); }else{ console.warn('Cliente: ', err.status);}
  return throwError(( ) =>  new Error (err.error.message)) }
}
