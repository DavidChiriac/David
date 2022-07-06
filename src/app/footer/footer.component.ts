import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  copyMessage(){
    navigator.clipboard.writeText("chiriac_david99@yahoo.com").then().catch(e => console.error(e));
  }

  constructor() { }

  ngOnInit(): void {
  }

}
