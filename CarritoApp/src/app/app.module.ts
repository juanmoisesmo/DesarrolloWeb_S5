import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { routing } from './app.routing';
import { RouterModule} from '@angular/router';
import { BaseRequestOptions } from '@angular/http';
import { Location, CommonModule} from '@angular/common';
import { AuthGuard } from './_guards/auth.guard';
import { AuthenticationService } from './_services/authentication.service';
import { UserService } from './_services/user.service';
import { CartService } from './_services/cart.service';
import { ProductsService } from './_services/products.service';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    routing
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,
    CartService,
    ProductsService,
    Location,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
