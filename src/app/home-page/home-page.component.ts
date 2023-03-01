import { Component } from '@angular/core';
import { prints} from '../prints';
import { Iprint } from '../Iprint';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

prints: Array<Iprint> = prints;
available: boolean = true;
print: Iprint = {} as Iprint;
id: number = 0;

constructor(private route: ActivatedRoute,
  private router: Router) { }

toBottom(){window.scrollTo(0,2400)
}

}


