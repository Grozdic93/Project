import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LightgalleryModule } from 'lightgallery/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { CitiesDetailsComponent } from './cities-details/cities-details.component';
import { WildLifeDetailsComponent } from './wild-life-details/wild-life-details.component';
import { LandScapesDetailsComponent } from './land-scapes-details/land-scapes-details.component';
import { StreetFoodDetailsComponent } from './street-food-details/street-food-details.component';
import { ArchitecturalDetailsComponent } from './architectural-details/architectural-details.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeroGalleryComponent } from './hero-gallery/hero-gallery.component';
import { SliderComponent } from './slider/slider.component';


@NgModule({
  declarations: [
    AppComponent,
    
    FooterComponent,
    NavbarComponent,
    HeroSectionComponent,
    HomePageComponent,
    AboutPageComponent,
    CitiesDetailsComponent,
    WildLifeDetailsComponent,
    LandScapesDetailsComponent,
    StreetFoodDetailsComponent,
    ArchitecturalDetailsComponent,
    PeopleDetailsComponent,
    GalleryComponent,
    HeroGalleryComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
   LightgalleryModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
