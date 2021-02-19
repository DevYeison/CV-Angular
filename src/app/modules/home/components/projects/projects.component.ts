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
  private deviceWidth: number = document.documentElement.clientWidth;

  @ViewChild('alert') private alertElement: ElementRef;
  
  constructor(private _projectSerivce: ProjectService) { 
    if(this.deviceWidth <= 320 ){
      this.deviceWidth = 320;
    }else if(this.deviceWidth >320 && this.deviceWidth <= 375){
      this.deviceWidth = 375;
    }else if(this.deviceWidth >375 && this.deviceWidth <= 425){
      this.deviceWidth = 425;
    }else if(this.deviceWidth >425 && this.deviceWidth <= 768){
      this.deviceWidth = 768;
    }else if(this.deviceWidth >768 && this.deviceWidth <= 1024){
      this.deviceWidth = 1024;
    }else if(this.deviceWidth >1024 && this.deviceWidth <= 1440){
      this.deviceWidth = 1440;
    }else if(this.deviceWidth >1440 && this.deviceWidth <= 2560){
      this.deviceWidth = 2560;
    }
  }

  ngOnInit(): void {
    this._projectSerivce
    .getProjects(this.deviceWidth)
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
