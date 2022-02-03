import { Component, Input, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatserviceService } from 'src/patservice.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  registerForm= new FormGroup({
    
    pname: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    cpassword: new FormControl('',Validators.required),
    date: new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required),
    gender: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
    city: new FormControl('',Validators.required)
  });
 
  
    constructor(private router:Router,private service: PatserviceService) { }

    ngOnInit(): void {
    }
    onSubmit() {
      alert('User datas are validated successfully!');
    }
  
    

  addPatient() {
    console.log('From pat.comp.ts ' + this.registerForm);
    this.service.register(this.registerForm.getRawValue()).subscribe((data: {}) => this.router.navigate(['/login']));
  }
} 