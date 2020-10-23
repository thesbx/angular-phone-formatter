import { NgModule } from '@angular/core';
import { AngularPhoneFormatterComponent } from './angular-phone-formatter.component';
import { FormatDirective } from './format.directive';



@NgModule({
  declarations: [AngularPhoneFormatterComponent, FormatDirective],
  imports: [
  ],
  exports: [AngularPhoneFormatterComponent]
})
export class AngularPhoneFormatterModule { }
