import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CoreModule } from 'src/app/core/core.module';
import { BodyComponent } from './components/body/body.component';
import { ProjectComponent } from './components/project/project.component';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent, 
    CarouselComponent, 
    BodyComponent, 
    ProjectComponent, 
    ProjectsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule
  ]
})
export class HomeModule { }
