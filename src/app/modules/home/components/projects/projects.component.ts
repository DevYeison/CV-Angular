import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from '../../http/project.service';

@Component({
  selector: 'home-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public loading: boolean = false;
  public error: string = "";
  public projects: Project[] = [];
  @ViewChild('alert') private alertElement: ElementRef;
  
  constructor(private _projectSerivce: ProjectService) { }

  ngOnInit(): void {
    this._projectSerivce
    .getProjects()
    .subscribe(
      (projects: any)=>{
      this.loading = true;
      this.projects = projects;
    },
    (error) =>{
      this.error = error.message;
      this.loading = false;
    }
    )
  }

  closeAlert(){
    this.alertElement.nativeElement.classList.remove("show");
  }
}
