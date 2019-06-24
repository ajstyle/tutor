import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FormsModule , ReactiveFormsModule } from '@angular/forms';

import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [
  ],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule
  ],
  exports : [MatCheckboxModule, MatButtonModule, MatSidenavModule, MatDividerModule]
})
export class MaterialModule { }
