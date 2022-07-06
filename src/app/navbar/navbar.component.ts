import { PagesService } from './../pages.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  pages;
  constructor(service:PagesService) { 
    this.pages=service.getPages();
  }

  ngOnInit(): void {
  }

}
