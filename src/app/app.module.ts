import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "@src/app/app-routing.module";
import { AppComponent } from "@src/app/app.component";
import { HomeComponent } from "@src/app/home/home.component";
import { LinkprocessorService } from "./home/linkprocessor.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AngularFireModule } from "@angular/fire";
import { environment } from "@src/environments/environment";
import { AuthenticationService } from "./shared/auth/authentication.service";
import { SignUpComponent } from "./sign-up/sign-up.component";

@NgModule({
  declarations: [AppComponent, HomeComponent, SignUpComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [LinkprocessorService, AuthenticationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
