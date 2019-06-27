import {MatButtonModule, MatCheckboxModule,MatPaginatorModule,MatSortModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FormsModule , ReactiveFormsModule } from '@angular/forms';

import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

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
    MatInputModule,
    MatPaginatorModule,
    MatSortModule
  
  ],
  exports : [MatCheckboxModule, MatButtonModule, MatFormFieldModule, MatInputModule ,
            MatPaginatorModule, MatSidenavModule,MatSortModule, MatDividerModule, MatTableModule]
})
export class MaterialModule { }
