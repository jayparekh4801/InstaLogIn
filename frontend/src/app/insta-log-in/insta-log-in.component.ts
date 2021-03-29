import { Component, OnInit } from '@angular/core';
import { LogInService } from '../log-in.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-insta-log-in',
  templateUrl: './insta-log-in.component.html',
  styleUrls: ['./insta-log-in.component.css']
})
export class InstaLogInComponent implements OnInit {

  constructor(private logInService : LogInService) { }

  ngOnInit(): void {
  }

  logInData : any = {
    userName : "",
    password : ""
  }
  onSubmit() {
    this.logInService.logInData(this.logInData).subscribe((data : any) => {
      if(data.success) {
        Swal.fire("Procreate", data.message, 'success');
      }
    })
  }
}
