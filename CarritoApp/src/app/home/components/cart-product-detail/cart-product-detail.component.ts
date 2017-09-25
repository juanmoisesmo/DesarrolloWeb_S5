import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductsService} from '../../../_services/products.service';
import {Product} from '../../../_model/product';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {Observable} from 'rxjs';

@Component({
  selector: 'cart-cart-product-detail',
  templateUrl: './cart-product-detail.component.html',
  styleUrls: ['./cart-product-detail.component.css']
})
export class CartProductDetailComponent implements OnInit {

  public product: any = {};

  constructor(private route: ActivatedRoute
    , private router: Router
    , private productsService: ProductsService) {
    }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.productsService
        .getProduct(id)
        .subscribe(_ => this.product = _);
    });
  }
  public getCurrency(): string {
    return 'S/';
  }

 back() {
     this.router.navigate(['']);
  }
}
