import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SecurityService } from '../../services/security.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(7)]),
  })

  constructor(private router: Router, private securityService: SecurityService) {}
  criarConta() {
    this.router.navigate(['/register']);
  }

  register() {
    this.securityService.register(this.registerForm.value.name!, this.registerForm.value.email!, this.registerForm.value.password!).subscribe({
      next: (res: {message: string}) => {
        this.router.navigateByUrl('');
      }
    })
  }
}
