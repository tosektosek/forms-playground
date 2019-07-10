import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomDropdownComponent } from './dropdown-wrapper/custom-dropdown/custom-dropdown.component';
import { DropdownWrapperComponent } from './dropdown-wrapper/dropdown-wrapper.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { JwtModule } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    CustomDropdownComponent,
    DropdownWrapperComponent,
    LoginComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    JwtModule.forRoot({}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
