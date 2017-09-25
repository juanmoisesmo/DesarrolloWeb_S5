import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  moduleId: module.id,
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';

  constructor(private router: Router,
        private authenticationService: AuthenticationService) {
          document.body.style.backgroundImage = 'url(\'./images/login-fondo.jpg\')';
        }

  ngOnInit() {
    this.authenticationService.logout();
  }

  login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    this.router.navigate(['/home']);
                } else {
                    this.error = 'Error en el inicio de sesión';
                    this.loading = false;
                }
            });
    }

}
