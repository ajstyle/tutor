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

@NgModule({
  declarations: [
    AppComponent,
    MyTutorComponent,
    SettingsComponent,
    CompleteLessonComponent,
    ScheduleLessonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule ,
    ReactiveFormsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
