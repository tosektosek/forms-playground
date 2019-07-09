import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.minLength(2), Validators.required]),
    password: new FormControl('', [Validators.minLength(5), Validators.required])
  });
  error: string;
  constructor(private router: Router) {}

  ngOnInit() {}

  login(role: string) {
    if (role === 'user') {
      localStorage.setItem(
        'token',
        // tslint:disable-next-line:max-line-length
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwicm9sZSI6InVzZXIifQ.hPzNIwvrbzdbVoGN6vp3FWQ5xI-jEhwwuCu6qFf2sJY'
      );
      this.router.navigate(['forms']).then(a => {
        if (!a) {
          this.error = 'canDeactive returned false. You shall not pass'
        }
      });
    } else if (role === 'admin') {
      localStorage.setItem(
        'token',
        // tslint:disable-next-line:max-line-length
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwicm9sZSI6ImFkbWluIn0.ZhmtWZOhodjm5knipDZ6Hfp5iZUzZXRrYaUofWWDk7w',
      );
      this.router.navigate(['admin']).then(a => {
        if (!a) {
          this.error = 'canDeactive returned false. You shall not pass'
        }
      });
    }
  }
}
