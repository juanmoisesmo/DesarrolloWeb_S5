import {Injectable} from '@angular/core';
import { Product } from '../_model/product';
import {ProductCart} from '../_model/product-cart';
import {BehaviorSubject, Observable, Subject, Subscriber} from 'rxjs';
import {of} from 'rxjs/observable/of';

@Injectable()
export class CartService {
  private itemsInCartSubject: BehaviorSubject<ProductCart[]> = new BehaviorSubject([]);
  private itemsInCart: ProductCart[] = [];

  constructor() {
    this.itemsInCartSubject.subscribe(_ => this.itemsInCart = _);
  }

  public addToCart(item: ProductCart) {
    this.itemsInCartSubject.next([...this.itemsInCart, item]);
    localStorage.setItem('itemsinCart', JSON.stringify(this.itemsInCart));
  }

  public addToCartItemsSession() {

    const itemsInCartSession =  localStorage.getItem('itemsinCart');
    if (itemsInCartSession !== '') {

        let items: ProductCart[] = [];
        items = JSON.parse(itemsInCartSession);

        if (items !== null &&  items.length !== 0) {
          localStorage.setItem('itemsinCart', '');
          items.forEach(x => {
            this.addToCart(x);
          });
        }
    }
  }

  public getItemsInCart(): Observable<ProductCart[]> {
    return this.itemsInCartSubject.asObservable();
  }

  public removeAllItemsFromCart() {
    this.itemsInCartSubject.next([...this.itemsInCart, null]);
  }

}
