import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { AuthenticationService } from './authentication.service';
import { User } from '../_model/user';

@Injectable()
export class UserService {

  constructor(private http: Http, private authenticationService: AuthenticationService) { }

  getUser(): Observable<User> {
        const headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        const options = new RequestOptions({ headers: headers });

        return this.http.get('https://bodega-c519f.firebaseio.com/users/.json')
                .map((response: Response) => {
                    let user;
                    response.json().forEach(x => {
                          if (x != null) {
                            if (x.token === this.authenticationService.token) {
                                user = { username: x.username , password: x.password, firstName: x.name, lastName: x.lastname };
                            }
                          }
                    });
                   return user;
                });
    }

}
