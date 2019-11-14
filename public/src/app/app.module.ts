import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// register service
import { HttpService } from './http.service';
// import httpclient
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AuthsComponent } from './auths/auths.component';
import { NewauthsComponent } from './newauths/newauths.component';
import { EditauthsComponent } from './editauths/editauths.component'; // <-- import FormsModule.

@NgModule({
  declarations: [
    AppComponent,
    AuthsComponent,
    NewauthsComponent,
    EditauthsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
