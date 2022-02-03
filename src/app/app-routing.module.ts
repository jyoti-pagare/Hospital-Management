import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OurservicesComponent } from './ourservices/ourservices.component';

import { PatientdetailsComponent } from './patientdetails/patientdetails.component';
import { PatientUpdateComponent } from './patientupdate/patientupdate.component';

import { RegisterComponent } from './register/register.component';
import { ServicesComponent } from './services/services.component';
import { AmbulanceComponent } from './ambulance/ambulance.component';
import { FoodComponent } from './food/food.component';
import { MedicationComponent } from './medication/medication.component';

const routes: Routes = [
{path: 'home',component:HomeComponent},
{path:'aboutus',component:AboutusComponent},
{path:'contactus',component:ContactusComponent},
{path:'login',component:LoginComponent},
{path:'ourservices',component:OurservicesComponent},

{path:'patientdetails',component:PatientdetailsComponent},
{path:'patientupdate/:pid',component:PatientUpdateComponent},

{path:'register',component:RegisterComponent},
{path:'services',component:ServicesComponent},
{path:'ambulance',component:AmbulanceComponent},
{path:'food',component:FoodComponent},
{path:'medication',component:MedicationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
