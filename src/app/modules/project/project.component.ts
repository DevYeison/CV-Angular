import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from '../home/http/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  public project: Project;
  public loading: boolean = false;
  public error: string = "";
  @ViewChild('alert') private alertElement: ElementRef;

  constructor(private _activatedRoute: ActivatedRoute, private _projectService: ProjectService) {
    this.project = {
      _id: "loading...",
      name: "loading...",
      description: "loading...",
      finishDate: new Date,
      images: ['https://zonegis.es/wp-content/uploads/2020/05/Loading.jpg'],
      createdAt: new Date,
      updatedAt: new Date
    }
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params =>{
      const id: string = params['id'];
      this._projectService.getProject(id)
      .subscribe(
        (project: Project)=>{
        this.loading = true;
        this.project = project;
      },
      (error) =>{
        this.loading = false;
        this.error = error.message;
      }
      );
    });
  }

  closeAlert(){
    this.alertElement.nativeElement.classList.remove("show");
  }
}
