import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent {

  confirmAction(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Send it!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Send!',
          'Your file has been Send.',
          'success'
        )
      }
    })
  }
  
}




