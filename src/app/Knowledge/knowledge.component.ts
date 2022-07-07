import { FromFacultyService } from './../from-faculty.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.css']
})
export class KnowledgeComponent implements OnInit {

  fromFaculty;
  constructor(service: FromFacultyService) {
    this.fromFaculty=service.getWhatIDid();
   }

  ngOnInit(): void {
  }

}
