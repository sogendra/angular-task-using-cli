import { NgModule } from '@angular/core';

import { CoreComponent } from './core.component';
import { NavbarModule } from './navbar/navbar.module';

@NgModule({
  declarations: [CoreComponent],
  imports: [
  ],
  exports: [
    CoreComponent,
    NavbarModule
  ]
})
export class CoreModule { }
