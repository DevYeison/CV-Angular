import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LightboxModule } from 'ngx-lightbox';

@NgModule({
  declarations: [ProjectComponent, FooterComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    FontAwesomeModule,
    LightboxModule
  ]
})
export class ProjectModule { }
