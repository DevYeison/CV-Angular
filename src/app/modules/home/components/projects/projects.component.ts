import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/core/http/project.service';
import { Project } from 'src/app/core/models/project.model';

@Component({
  selector: 'projects',
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
