import {Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import { AuthGuard } from '.././_guards/auth.guard';
import {CartProductDetailComponent} from './components/cart-product-detail/cart-product-detail.component';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent, canActivate: [AuthGuard]
  },
  {
    path: 'products/details/:id',
    component: CartProductDetailComponent, canActivate: [AuthGuard]
  },
  {
    path: 'products/cart',
    component: ShoppingCartComponent, canActivate: [AuthGuard]
  }
];


