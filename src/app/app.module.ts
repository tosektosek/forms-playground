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
import { TestResolveComponent } from './test-resolve/test-resolve.component';
import { TestHttpInterceptorComponent } from './test-http-interceptor/test-http-interceptor.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptorService } from './token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    CustomDropdownComponent,
    DropdownWrapperComponent,
    LoginComponent,
    AdminComponent,
    TestResolveComponent,
    TestHttpInterceptorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    // JwtModule.forRoot({}),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
