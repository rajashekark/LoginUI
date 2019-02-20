import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '../../../node_modules/@angular/forms';
import { LoginServiceService } from '../login-service.service';
import { Router } from '../../../node_modules/@angular/router';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {


  registerForm: FormGroup;
  loading = false;
  submitted = false;
  message:String;

  constructor(private fb: FormBuilder, private loginService: LoginServiceService,
    private router: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      // id: [],
      firstName: ['', [Validators.required,Validators.minLength(5)]],
      lastName: ['', [Validators.required,Validators.minLength(5)]],
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;


    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;

    this.loginService
      .createUser(this.registerForm.value)
      .subscribe(
        data=>{
          this.router.navigate(['/login']);
          this.message="Registration successfully";
        }
      );
    // console.log("firstName");
    //  this.registerForm.reset();
  }
}
