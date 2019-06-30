import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from '../material/material.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule , ReactiveFormsModule } from '@angular/forms';
import { MyTutorComponent } from './my-tutor/my-tutor.component';
import {MatTabsModule} from '@angular/material/tabs';
import { SettingsComponent } from './settings/settings.component';
import { CompleteLessonComponent } from './complete-lesson/complete-lesson.component';
import { ScheduleLessonComponent } from './schedule-lesson/schedule-lesson.component';
import { PendingLessonComponent } from './pending-lesson/pending-lesson.component';
import { SettingsQualificationComponent } from './settings-qualification/settings-qualification.component';
import { ReviewPopupComponent } from './review-popup/review-popup.component';
import { ReviewComponent } from './review/review.component';
import { RatingModule } from 'ng-starrating';

@NgModule({
  declarations: [
    AppComponent,
    MyTutorComponent,
    SettingsComponent,
    CompleteLessonComponent,
    ScheduleLessonComponent,
    PendingLessonComponent,
    SettingsQualificationComponent,
    ReviewPopupComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule ,
    ReactiveFormsModule,
    MatTabsModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents : [ReviewPopupComponent]
})
export class AppModule { }
