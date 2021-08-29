import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly getUserById;
  private readonly createUser;
  private readonly updateUser;

  constructor(
    private readonly router: Router,
    private readonly httpClient: HttpClient) {
    this.getUserById = `${environment.rootPath}agent/getUserById`;
    this.createUser = `${environment.rootPath}agent/createUser`;
    this.updateUser = `${environment.rootPath}agent/updateUser`;
  }

  registerUser (userDetails) {
    return this.httpClient.post(this.createUser, userDetails);
  }

  changeUserPassword (userDetails) {
    return this.httpClient.put(this.updateUser, userDetails);
  }

  getUserDetails ({userName, password}) {
    return this.httpClient.get(`${this.getUserById}?userName=${userName}&password=${password}`);
  }

}
