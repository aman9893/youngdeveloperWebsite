import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ROUTING } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { Header2Component } from './header2/header2.component';
import { FeaturesComponent } from './features/features.component';
import { PORTFOLIOComponent } from './portfolio/portfolio.component';
import { ProductComponent } from './product/product.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FeaturesContainerComponent } from './features-container/features-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    TestimonialComponent,
    AboutusComponent,
    ContactComponent,
    Header2Component,
    FeaturesComponent,
    PORTFOLIOComponent,
    ProductComponent,
    FeaturesContainerComponent
  ],
  imports: [
    BrowserModule,
    ROUTING
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
