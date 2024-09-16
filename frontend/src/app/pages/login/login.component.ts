import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { SecurityService } from '../../services/security.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  message = '';

  constructor(private securityService: SecurityService, private router: Router) {}

  login() {
    this.securityService.login(this.loginForm.value.email!, this.loginForm.value.password!).subscribe({
      next: (res: {message: string, user: string}) => {
        sessionStorage.setItem("user", res.user);
        this.router.navigateByUrl('main');
      },
      error: (res: {message: string}) => {
        this.message = "Não foi possivel efetuar o login";
      }
    })
  }
}

