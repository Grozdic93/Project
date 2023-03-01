import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  bottomPage(){
    this.router.navigate(['/about'], { relativeTo: this.route });
    setTimeout(()=>{window.scrollTo(0,document.body.scrollHeight);}, 500);
    

  }

}
