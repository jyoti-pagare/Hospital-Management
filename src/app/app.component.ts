import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hospital';
  router: any;
  
  ngOnInit(): void {
    
  }
  details(){
    this.router.navigate(['/patientdetails'])
  }
  updatepatient(){
    this.router.navigate(['/patientupdate'])
  }
  
loggedin(){
  return localStorage.getItem('user');
}
onLogout(){
  if
    (window.confirm('Are you sure , you want to logout')){
      localStorage.removeItem('user');
    }
}
}
