import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{ path: "home",
  loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
},
{
  path: "project/:id",
  loadChildren: () => import('./modules/project/project.module').then(m => m.ProjectModule)
},
{ path: "not-found",
  loadChildren: () => import('./modules/not-found/not-found.module').then(m => m.NotFoundModule),
},
{
  path: '**', 
  pathMatch: "full", 
  redirectTo: 'home'
}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      anchorScrolling: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
