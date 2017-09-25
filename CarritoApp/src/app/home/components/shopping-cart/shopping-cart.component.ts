import {Component, OnInit} from '@angular/core';
import {CartService} from '../../../_services/cart.service';
import {ProductCart} from '../../../_model/product-cart';
import {Observable} from 'rxjs';
import {of} from 'rxjs/observable/of';

@Component({
  selector: 'cart-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public shoppingCartItems$: Observable<ProductCart[]> = of([]);
  public shoppingCartItems: ProductCart[] = [];

  constructor(private cartService: CartService) {
    this.shoppingCartItems$ = this
    .cartService
    .getItemsInCart();

    this.shoppingCartItems$.subscribe(_ => this.shoppingCartItems = _);
  }

  ngOnInit() {
  }

}
