import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import {CartService} from '../_services/cart.service';
import 'rxjs/add/operator/map';
import {BehaviorSubject, Observable, Subject, Subscriber} from 'rxjs';
import {of} from 'rxjs/observable/of';

@Injectable()
export class AuthenticationService {
  public token: string;

  constructor(private http: Http,private cartService: CartService) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(username: string, password: string): Observable<boolean> {
            return this.http.get('https://bodega-c519f.firebaseio.com/users/.json')
                .map((response: Response) => {
                     console.log(response.json());
                    let result = false;
                    response.json().forEach(x => {
                        if (x != null) {
                            if (x.username === username && x.password === password) {
                                this.token = x.token;
                                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: x.token }));
                                result = true;
                            }
                        }
                    });
                    if (result) {
                        return true;
                    }else {
                         return false;
                    }
                });
         }

    logout(): void {
        this.token = null;
        localStorage.removeItem('currentUser');
        localStorage.removeItem('itemsinCart');
        this.cartService.removeAllItemsFromCart();
    }

}
