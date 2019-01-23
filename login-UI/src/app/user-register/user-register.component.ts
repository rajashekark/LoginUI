import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '../../../node_modules/@angular/forms';
import { LoginServiceService } from '../login-service.service';
import { Router } from '../../../node_modules/@angular/router';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

data:any;
  registerForm : FormGroup;
  constructor(private fb:FormBuilder, private loginService: LoginServiceService, 
  private router:Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      id : [],
    firstName : ['',[Validators.required, Validators.minLength(4)]],
    lastName :  ['',Validators.minLength(4)],
  });
}
onSubmit() {
  this.loginService
  .createUser(this.registerForm.value)
  .subscribe();
  }
  }