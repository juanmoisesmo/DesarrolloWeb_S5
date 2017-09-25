import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {Observable} from 'rxjs';
import { Product } from '../../../_model/product';
import { ProductsService } from '../../../_services/products.service';
import { CartService } from '../../../_services/cart.service';

@Component({
  selector: 'cart-cart-list-item',
  templateUrl: './cart-list-item.component.html',
  styleUrls: ['./cart-list-item.component.css']
})
export class CartListItemComponent implements OnInit {

  public shoppingCartItems$: Observable<Product[]>;
  public items: Product[] = [];

  constructor(private productsServices: ProductsService,
    private cartService: CartService) {
      productsServices.getProducts()
      .subscribe(_ => this.items = _);
    }

  ngOnInit() {
  }

}
