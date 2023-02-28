import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CitiesDetailsComponent } from './cities-details/cities-details.component';
const routes: Routes = [
  {path:"", component: HomePageComponent
},{
    path:"about", component: AboutPageComponent
  },{
    path:"gallery", component: GalleryComponent
  },{
    path:"details", component: CitiesDetailsComponent
  }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
