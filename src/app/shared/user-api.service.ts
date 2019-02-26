import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})

export class UserApiService {

  result: Observable<User>;
  public API = 'http://localhost:54118/api';
  public Users_API = `${this.API}/users`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<User>> {
    return this.http.get<Array<User>>(this.Users_API);
  }

  post(user: User): Observable<User> {
    return this.result = this.http.post<User>(`${this.Users_API}`, user);
  }

  put(user: User): Observable<User> {
    return this.result = this.http.put<User>(`${this.Users_API}/${user.Id}`, user);
  }
  
  delete(user: User) {
    this.http.delete(`${this.Users_API}/${user.Id.toString()}`).subscribe((ok) => { console.log(ok) });
  }
}
