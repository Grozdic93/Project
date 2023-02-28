import { Component } from '@angular/core';
import { prints} from '../prints';
import { Iprint } from '../Iprint';

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
}
