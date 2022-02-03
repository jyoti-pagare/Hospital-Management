import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  name!: string;
  email!: string;
  message!: string;

  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    const message= 'my name is ${this.name} my email is ${this.email}';
  }

}
