import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {Observable} from 'rxjs';
import {User } from '../../../_model/user';
import {UserService} from '../../../_services/user.service';
import {CartService} from '../../../_services/cart.service';
import {ProductCart} from '../../../_model/product-cart';

@Component({
  selector: 'cart-cart-header',
  templateUrl: './cart-header.component.html',
  styleUrls: ['./cart-header.component.css']
})
export class CartHeaderComponent implements OnInit {

  user: User;
  public shoppingCartItems$: Observable<ProductCart[]>;
  public cartItems: ProductCart[];
  constructor(private userService: UserService, private cartService: CartService) {
    document.body.style.backgroundImage = 'url(\'./images/main-fondo.jpg\')';
  }

  ngOnInit() {

    this.userService.getUser()
            .subscribe(user => {
                this.user = user;
            });

    this.shoppingCartItems$ = this
            .cartService
            .getItemsInCart();

    this.shoppingCartItems$.subscribe(_ => _);

    this.shoppingCartItems$.subscribe(_ => {
        this.cartItems = _;

        if (this.cartItems.length === 0) {
          this.cartService.addToCartItemsSession();
       }
    });

  }

}
