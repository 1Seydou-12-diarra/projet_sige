import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EleveComponent } from './eleve/eleve.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'Eleve',
    component: EleveComponent
  },



  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
