import { Component } from '@angular/core';
import{Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  constructor(private route: ActivatedRoute,
               private router: Router) { }
  expandCities= function(){
    const card=document.querySelector(".cities")as HTMLElement;
    card.style.display = "block";
    card.style.transition = "all 1.5s linear";
    card.style.zIndex = "100";
    card.style.transform = "rotateZ(360deg) scale(8)"
    card.style.opacity = "0";
    
   
    setTimeout(()=>{
      card.style.transition = "none";
      card.style.transform = "scale(1)"
      card.style.opacity = "1";
      card.style.zIndex = "0";
      this.router.navigate(['/gallery/cities-details'], { relativeTo: this.route });
     
    }, 1500);
  }

}
