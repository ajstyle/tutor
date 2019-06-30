import {MatButtonModule, MatCheckboxModule,MatPaginatorModule,MatSortModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FormsModule , ReactiveFormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';

import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
  ],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatTableModule,
    MatListModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatExpansionModule,
    MatProgressBarModule

  ],
  exports : [MatCheckboxModule, MatButtonModule, MatFormFieldModule, MatInputModule ,
          MatListModule, MatProgressBarModule,
           MatPaginatorModule, MatSidenavModule,MatSortModule, MatExpansionModule, MatDividerModule, MatTableModule]
})
export class MaterialModule { }
