import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/core/http/project.service';
import { Project } from 'src/app/core/models/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  public project: Project;
  constructor(private _activatedRoute: ActivatedRoute, private _projectService: ProjectService) {
    this.project = {
      _id: "loading...",
      name: "loading...",
      description: "loading...",
      finishDate: new Date,
      images: ['https://www.clipartmax.com/png/middle/200-2006541_circles-loader-vector-loading-circle-transparent-png.png'],
      createdAt: new Date,
      updatedAt: new Date
    }
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params =>{
      const id: string = params['id'];
      this._projectService.getProject(id).subscribe((project: Project)=>{
        this.project = project;
      });
    });
  }

}
