import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyTutorComponent} from './my-tutor/my-tutor.component' ;
import {SettingsComponent} from './settings/settings.component' ;
import {CompleteLessonComponent} from './complete-lesson/complete-lesson.component' ;
import {ScheduleLessonComponent} from './schedule-lesson/schedule-lesson.component' ;
import {PendingLessonComponent} from './pending-lesson/pending-lesson.component' ;
import {SettingsQualificationComponent} from './settings-qualification/settings-qualification.component' ;
import {ReviewComponent} from './review/review.component' ;
import {ScheduleLessonStudentComponent} from './schedule-lesson-student/schedule-lesson-student.component' ;
import {BlockScheduleComponent} from './block-schedule/block-schedule.component' ;
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

},
{
  path : 'pendingLesson',
  component : PendingLessonComponent
},
{
  path : 'settingQualification',
  component : SettingsQualificationComponent
},
{
  path : 'review',
  component : ReviewComponent
},
{
  path : 'myTutors' ,
  component : ScheduleLessonStudentComponent
},
{
  path : 'blockSchedule' ,
  component : BlockScheduleComponent
}



];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
