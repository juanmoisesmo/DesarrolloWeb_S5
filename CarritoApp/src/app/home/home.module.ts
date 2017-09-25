import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { routes } from './home.routes';
import { CartListItemComponent } from './components/cart-list-item/cart-list-item.component';
import { CartHeaderComponent } from './components/cart-header/cart-header.component';
import { CartProductComponent } from './components/cart-product/cart-product.component';
import { CartProductDetailComponent } from './components/cart-product-detail/cart-product-detail.component';
import { CartProductListComponent } from './components/cart-product-list/cart-product-list.component';
import { SearchPipe } from './components/cart-list-item/search.pipe';
import { FormsModule } from '@angular/forms';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

@NgModule({
  imports: [
     CommonModule,
     FormsModule,
     RouterModule.forChild(routes)
  ],
  declarations: [
    HomeComponent,
    CartListItemComponent,
    CartHeaderComponent,
    CartProductComponent,
    CartProductDetailComponent,
    CartProductListComponent,
    SearchPipe,
    ShoppingCartComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
