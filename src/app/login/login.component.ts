
import { Component, inject } from '@angular/core';
import { User } from './user.models';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  firebaseService = inject(AuthService);



  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])

  })
  constructor() { }

  ngOnInit() {
  }

  async submit() {
    if (this.form.valid) {


      this.firebaseService.signIn(this.form.value as User)
        .then(resp => {

          console.log('___', resp)

        })
    }
  }


}
