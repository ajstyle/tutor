import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyTutorComponent} from './my-tutor/my-tutor.component' ;
import {SettingsComponent} from './settings/settings.component' ;
const routes: Routes = [{
  path : '' ,
  redirectTo : 'tutor',
  pathMatch : 'full'  
} ,{
  path : 'tutor' ,
  component : MyTutorComponent
},
{
  path : 'settings' ,
  component : SettingsComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
