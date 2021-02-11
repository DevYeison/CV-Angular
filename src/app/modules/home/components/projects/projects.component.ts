import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from '../../http/project.service';

@Component({
  selector: 'home-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public projects: Project[] = [];
  constructor(private _projectSerivce: ProjectService) { }

  ngOnInit(): void {
    this._projectSerivce
    .getProjects()
    .subscribe((projects: any)=>{
      this.projects = projects;
    })
  }

}
