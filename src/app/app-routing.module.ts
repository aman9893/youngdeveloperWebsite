import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { FeaturesComponent } from './features/features.component';
import { PORTFOLIOComponent } from './portfolio/portfolio.component';
import { ProductComponent } from './product/product.component';

export const  AppRoutes: Routes = [
 
    { path:'home', component: HomeComponent},
    { path:'about', component: AboutusComponent},
    { path:'features', component: FeaturesComponent},
    { path:'contact', component: ContactComponent},
    { path:'product', component: ProductComponent},
    { path:'portfolio', component: PORTFOLIOComponent},
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "**", component: HomeComponent }
    ]

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes , { useHash: true });
