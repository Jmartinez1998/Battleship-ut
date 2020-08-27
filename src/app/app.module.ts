import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BoardgameComponent } from './components/boardgame/boardgame.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Inicio servicios
import { ChargescriptsService } from './chargescripts.service';
//End services

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BoardgameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    ChargescriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
