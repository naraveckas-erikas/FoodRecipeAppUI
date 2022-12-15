import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  responseData: any;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  login(loginData: any) {
    if (loginData.valid) {
      this.userService.login(loginData.value).subscribe((resp) => {
        this.responseData = resp;
        if (this.responseData != null) {
          localStorage.setItem('token', this.responseData.accessToken);
          this.router.navigate(['/categories']);
        }
      });
    }
  }

  navigateToRegister() {
    this.router.navigate(['register']);
  }
}
