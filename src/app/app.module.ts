import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomDropdownComponent } from './dropdown-wrapper/custom-dropdown/custom-dropdown.component';
import { DropdownWrapperComponent } from './dropdown-wrapper/dropdown-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    CustomDropdownComponent,
    DropdownWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
