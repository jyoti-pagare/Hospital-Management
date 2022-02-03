import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PatserviceService } from 'src/patservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private patserviceService:PatserviceService,private router:Router) { }

  ngOnInit(): void {

  }
  onLogin(loginForm: NgForm){
    console.log(loginForm.value);
    const user=this.patserviceService.getPatient(loginForm.value);
    console.log(user);

    if(user){
      localStorage.setItem('user',JSON.stringify(user));
      //console.log('Login Successfully')
      this.router.navigate(['home'])

    }
    else{
      console.log('Login not Successfully')
    }
  }

}
