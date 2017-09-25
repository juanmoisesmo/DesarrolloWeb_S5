import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../_model/product';
import {ProductsService} from '../../../_services/products.service';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'cart-cart-product-list',
  templateUrl: './cart-product-list.component.html',
  styleUrls: ['./cart-product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartProductListComponent implements OnInit {

  @Input() public items: Product[] = [];

  constructor(private router: Router, private productsService: ProductsService) { }

  ngOnInit() {
    }

}
