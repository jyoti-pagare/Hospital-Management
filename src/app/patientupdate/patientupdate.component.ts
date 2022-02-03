import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {PatserviceService } from 'src/patservice.service'

@Component({
  selector: 'app-patientupdate',
  templateUrl: './patientupdate.component.html',
  styleUrls: ['./patientupdate.component.css'],
})
export class PatientUpdateComponent implements OnInit {
  public patData: any = {};
  submitted = false;

  public pid: any = this.aroute.snapshot.params['pid'];
  public selectedId: any;
  onSubmit() {
    this.submitted = true;
    alert('Patient datas are validated successfully!');
  }
  constructor(
    private service: PatserviceService,
    public router: Router,
    private aroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('from ng oninit' + this.pid);
    this.service
      .getPatient(this.pid)
      .subscribe((data) => (this.patData = data));
  }

  updatePatient() {
    console.log(' Patient Data ----->' + this.patData);
    this.service
      .updatePatient(this.patData)
      .subscribe((data) => this.router.navigate(['/patientdetails']));
  }
}
