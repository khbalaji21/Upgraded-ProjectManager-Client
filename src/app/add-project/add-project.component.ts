import { Component, OnInit } from '@angular/core';

import { Project } from '../model/project';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  chkd: boolean;
  project: Project = new Project();

  constructor() { }

  ngOnInit() {
  }

  DateIndic(ch: any) {
    this.chkd = ch;
  }

}
