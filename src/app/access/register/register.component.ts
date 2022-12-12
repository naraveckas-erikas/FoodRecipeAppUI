import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  reactiveForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    password: new FormControl('', Validators.required),
  });

  response: any;

  constructor(
    private router: Router,
    private userService: UserService,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {}

  navigateToLogin() {
    this.router.navigate(['login']);
  }

  saveUser() {
    if (this.reactiveForm.valid) {
      this.userService.register(this.reactiveForm.value).subscribe((resp) => {
        this.response = resp;
        if (this.response.id) {
          this.navigateToLogin();
          this.toaster.success('Please log in', 'Registered successfully');
        }
      });
    }
  }
}
