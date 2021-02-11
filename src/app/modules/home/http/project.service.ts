import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private baseUrl: string = environment.BASE_API_URL;
  constructor(private readonly _http: HttpClient) { }

  public getProjects(){
    return this._http.get<Project>(this.baseUrl + "/project");
  }

   public getProject(projectId: string){
    return this._http.get<Project>(this.baseUrl + "/project/"+ projectId);
  } 
}
