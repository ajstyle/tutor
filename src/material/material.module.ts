import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FormsModule , ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  ],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports : [MatCheckboxModule, MatButtonModule, MatSidenavModule]
})
export class MaterialModule { }
