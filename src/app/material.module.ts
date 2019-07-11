import { NgModule } from '@angular/core';
import {MatBadgeModule,
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatTabsModule,
        MatCardModule,
      } from '@angular/material';


@NgModule({
  imports: [
    MatBadgeModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
  MatListModule,
MatTabsModule,
MatCardModule],

  exports: [
     MatBadgeModule,
     MatButtonModule,
     MatToolbarModule,
     MatSidenavModule,
     MatIconModule,
    MatListModule,
  MatTabsModule,
MatCardModule]
})
export class MaterialModule { }
