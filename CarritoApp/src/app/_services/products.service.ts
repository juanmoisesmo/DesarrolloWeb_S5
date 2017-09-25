import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import {of} from 'rxjs/observable/of';
import { Product } from '../_model/product';


@Injectable()
export class ProductsService {

  constructor(private http: Http) { }

  public getProducts(): Observable<Product[]> {
    return this.loadProducts();
  }

  public getProduct(id: number): Observable<Product> {
    return this
      .loadProducts()
      .map(_ => {
        return _.find((item: Product) => {
          return item.id === id;
        });
      });
  }

  private loadProducts(): Observable<Product[]> {
    return this.http.get('https://bodega-c519f.firebaseio.com/products/.json')
          .map((response: Response) => {
              const products = [];
              response.json().forEach(x => {
                if (x != null) {
                  const product = {
                    id: x.id,
                    name: x.name,
                    precio: x.precio,
                    stock: x.stock,
                    image: x.image,
                    quantity : 0
                  };
                  products.push(product);
                }
              });
              return products;
          });
  }
}
