import { Component, OnInit } from '@angular/core';
import { PatserviceService } from 'src/patservice.service';
import { Patient } from '../Patient';

@Component({
  selector: 'app-patientdetails',
  templateUrl: './patientdetails.component.html',
  styleUrls: ['./patientdetails.component.css']
})
export class PatientdetailsComponent implements OnInit {

  public patientdetails = [] as any;
  

  constructor(private pservice:PatserviceService) { }

  ngOnInit(): void {
    this.pservice
      .getpatientdetailsFromService()
      .subscribe((data) => (this.patientdetails = data));
  }
  

}