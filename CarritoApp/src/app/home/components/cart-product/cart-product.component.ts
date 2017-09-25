import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../../_model/product';
import {ProductCart} from '../../../_model/product-cart';
import {CartService} from '../../../_services/cart.service';
import {ProductsService} from '../../../_services/products.service';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {Observable} from 'rxjs';
import {of} from 'rxjs/observable/of';

@Component({
  selector: 'cart-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartProductComponent implements OnInit {

  @Input() public id: number;
  @Input() public name: string;
  @Input() public image: string;
  @Input() public precio: number;
  @Input() public stock: number;
  @Input() public quantity: number;

  public shoppingCartItems$: Observable<ProductCart[]> = of([]);
  public shoppingCartItems: ProductCart[] = [];

  constructor(private router: Router,
    private productsService: ProductsService,
    private cartService: CartService) {

      this.shoppingCartItems$ = this
      .cartService
      .getItemsInCart();

      this.shoppingCartItems$.subscribe(_ => this.shoppingCartItems = _);

  }

  ngOnInit() {
  }

  public getCurrency(): string {
    return 'S/';
  }

  viewProduct(id: number) {
     this.router.navigate(['/products/details', id]);
  }

  addToCart(id: number) {

   const cantidad =  (<HTMLInputElement>document.getElementById('txtCantidad_' + id)).value;

   this.productsService
   .getProduct(id)
   .subscribe(prd => {

     const prodcart: any = {};
     prodcart.productId = prd.id;
     prodcart.userName = 'jmori';
     prodcart.productName = prd.name;
     prodcart.productQuantity = Number(cantidad);
     prodcart.productPrice = prd.precio;
     prodcart.subTotal = (Number(cantidad) * prd.precio);
     prodcart.productImage = prd.image;

     this.shoppingCartItems$.subscribe(_ => this.shoppingCartItems = _);

     if (this.shoppingCartItems.length > 0) {
       const prodincart = this.shoppingCartItems.find(item => item.productId === prd.id);
       if (prodincart !== null && prodincart !== undefined ) {
           prodincart.productQuantity = prodincart.productQuantity + Number(cantidad);
           prodincart.subTotal =   prodincart.subTotal + (Number(cantidad) * prd.precio);
       }else {
        this.cartService.addToCart(prodcart);
       }
     }else {
      this.cartService.addToCart(prodcart);
     }
    });

  }
}