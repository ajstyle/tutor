import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyTutorComponent} from './my-tutor/my-tutor.component' ;
import {SettingsComponent} from './settings/settings.component' ;
import {CompleteLessonComponent} from './complete-lesson/complete-lesson.component' ;
import {ScheduleLessonComponent} from './schedule-lesson/schedule-lesson.component' ;

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
},
{
  path : 'settings' ,
  component : SettingsComponent
},
{
  path : 'completeLesson' ,
  component : CompleteLessonComponent
},
{
  path : 'scheduleLesson' ,
  component : ScheduleLessonComponent

}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
