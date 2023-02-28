import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CitiesDetailsComponent } from './cities-details/cities-details.component';
import { ArchitecturalDetailsComponent } from './architectural-details/architectural-details.component';
import { LandScapesDetailsComponent } from './land-scapes-details/land-scapes-details.component';
import { WildLifeDetailsComponent } from './wild-life-details/wild-life-details.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { StreetFoodDetailsComponent } from './street-food-details/street-food-details.component';
const routes: Routes = [
  {path:"", component: HomePageComponent
},{
    path:"about", component: AboutPageComponent
  },{
    path:"gallery", component: GalleryComponent
  },{
    path:"gallery/cities-details", component: CitiesDetailsComponent
  },{
    path:"gallery/architectural-details", component: ArchitecturalDetailsComponent
  },{
    path:"gallery/landscapes-details", component: LandScapesDetailsComponent
  },{
    path:"gallery/wildelife-details", component: WildLifeDetailsComponent
  },{
    path:"gallery/people-details", component: PeopleDetailsComponent
  },{
    path:"gallery/streetfood-details", component: StreetFoodDetailsComponent
  }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
