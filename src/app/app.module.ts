import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { OurservicesComponent } from './ourservices/ourservices.component';

import { PatientdetailsComponent } from './patientdetails/patientdetails.component';

import { RegisterComponent } from './register/register.component';
import { ServicesComponent } from './services/services.component';
import { AmbulanceComponent } from './ambulance/ambulance.component';
import { FoodComponent } from './food/food.component';
import { MedicationComponent } from './medication/medication.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PatientUpdateComponent } from './patientupdate/patientupdate.component';
import { RoomComponent } from './room/room.component';
import { DoctorComponent } from './doctor/doctor.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    LoginComponent,
    OurservicesComponent,
  
    PatientdetailsComponent,
    
    RegisterComponent,
    ServicesComponent,
    AmbulanceComponent,
    FoodComponent,
    MedicationComponent,
    PatientUpdateComponent,
    RoomComponent,
    DoctorComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule, FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
