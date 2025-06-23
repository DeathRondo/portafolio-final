import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav } from '@angular/material/sidenav';



@NgModule({
  declarations: [
  ],
  imports: [
    MatSidenav,
    CommonModule,
    MatDrawer,
    MatDrawerContainer,
    MatDrawerContent
  ],
  exports:[
    MatSidenav,
    MatDrawer,
    MatDrawerContainer,
    MatDrawerContent
  ]
})
export class MaterialModule { }
