import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from '../home/http/project.service';
import { Lightbox, LightboxConfig } from 'ngx-lightbox';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  private deviceWidth: number = document.documentElement.clientWidth;
  public project: Project;
  public loading: boolean = false;
  public error: string = "";
  @ViewChild('alert') private alertElement: ElementRef;

  private _album: Array<{ src: string, thumb: string }> = [];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _projectService: ProjectService, 
    private _ligthbox: Lightbox,
    private _ligthboxConfig: LightboxConfig) {
    if (this.deviceWidth <= 320) {
      this.deviceWidth = 320;
    } else if (this.deviceWidth > 320 && this.deviceWidth <= 375) {
      this.deviceWidth = 375;
    } else if (this.deviceWidth > 375 && this.deviceWidth <= 425) {
      this.deviceWidth = 425;
    } else if (this.deviceWidth > 425 && this.deviceWidth <= 768) {
      this.deviceWidth = 768;
    } else if (this.deviceWidth > 768 && this.deviceWidth <= 1024) {
      this.deviceWidth = 1024;
    } else if (this.deviceWidth > 1024 && this.deviceWidth <= 1440) {
      this.deviceWidth = 1440;
    } else if (this.deviceWidth > 1440 && this.deviceWidth <= 2560) {
      this.deviceWidth = 2560;
    }
    this.project = {
      _id: "loading...",
      name: "loading...",
      description: "loading...",
      finishDate: new Date,
      technologies: ["loading..."],
      imgs: ['https://zonegis.es/wp-content/uploads/2020/05/Loading.jpg']
    }
  
    _ligthboxConfig.disableScrolling = true;
    _ligthboxConfig.centerVertically = true;
    _ligthboxConfig.wrapAround = true;
    _ligthboxConfig.resizeDuration = 0.3;
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      const id: string = params['id'];
      this._projectService.getProject(id, this.deviceWidth)
        .subscribe(
          (project: Project) => {
            this.loading = true;
            this.project = project;
            project.imgs.forEach((img) => {
              this._album.push({
                src: img,
                thumb: img
              });
            })
          },
          (error) => {
            this.loading = false;
            this.error = error.message;
          }
        );
    });
  }

  open(index: number): void {
    this._ligthbox.open(this._album, index);
  }

  close(): void {
    this._ligthbox.close();
  }
  closeAlert() {
    this.alertElement.nativeElement.classList.remove("show");
  }
}
