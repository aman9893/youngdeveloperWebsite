import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';

export const  AppRoutes: Routes = [
 
    { path:'home', component: HomeComponent},
    { path:'about', component: AboutusComponent},
    { path:'contact', component: ContactComponent},
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "**", component: HomeComponent }
    ]

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
