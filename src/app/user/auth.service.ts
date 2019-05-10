import { Injectable } from '@angular/core';
import { Iuser } from './user.model';


@Injectable()
export class AuthService {

  currentUser: Iuser

  loginUser(username: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: username,
      firstName: 'Debabrata',
      lastName: 'Mandal'
    }
    return true;
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
}
