import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private Router: Router) {

   }

  ngOnInit(): void {
  }
  sendMeHome()
  {
    this.Router.navigate([''])
  }
}
