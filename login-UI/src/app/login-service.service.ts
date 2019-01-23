import { Injectable } from '@angular/core';
//import { HttpClient } from '../../node_modules/@types/selenium-webdriver/http';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { UserDetails } from './user-details';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(  private http: HttpClient) { }

url = 'http://' + environment.ipAddress + ':'+environment.port + '/user';


public getUserDetails() {
  return this
  .http
  .get<UserDetails[]>(`${this.url}/showUserDetails`)
}

public createUser(user: UserDetails):Observable<UserDetails> {
  return this
  .http
  .post<UserDetails>(`${this.url}/saveUserDetails`,user)

}
}

