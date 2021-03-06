import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { todo } from '../shared/todo-model';
import { CONFIG } from '../core/config';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class TodoService {

  constructor(
    private http: HttpClient,
  ) {}


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  getAllTodo(): Observable<todo[]> {
    const result = this.http.get<todo[]>(CONFIG.RootApi + '/todo')
    .pipe(retry(1), catchError(this.handleError));
    return result;
  }

  getTodoDetails(id: string): Observable<todo> {
    const param = '?id=' + id; 
    const result = this.http.get<todo>(CONFIG.RootApi + '/todo/' + param)
    .pipe(retry(1), catchError(this.handleError));
    return result;
  }

  deleteTodo(id: string) {
    const result = this.http.delete<todo[]>(CONFIG.RootApi + '/todo/' + id)
    .pipe(retry(1), catchError(this.handleError));
    return result;
  }

  createTodo(todo): Observable<todo> {
    const result = this.http.post<todo>(CONFIG.RootApi + '/todo', JSON.stringify(todo), this.httpOptions)
    .pipe(retry(1), catchError(this.handleError));
    return result;
  }

  updateTodo(id: string, todo): Observable<todo> {
    const result = this.http.put<todo>(CONFIG.RootApi + '/todo/' + id, JSON.stringify(todo), this.httpOptions)
    .pipe(retry(1), catchError(this.handleError));
    return result;
  }






















  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}