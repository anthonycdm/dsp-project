import { BrowserModule, Title, Meta } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule, DatePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { Location } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService, LoginService, ActivitesService, AuthService, CartService, DateService,
         GerantService, ReservationService, NotesService, CommentairesService, PhotosService, 
         SessionsService, LoaderPageService, MetasService } from './services/index';
import { OrderbyPipe } from './pipes/orderby.pipe';
import {appRoutes, AppRoutingModule} from './app-routing/app-routing.module';



@NgModule({
  declarations: [
    AppComponent ,
    OrderbyPipe
   
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpModule

  ],
  providers: [
    ActivitesService,
    LoginService,
    UserService,
    AuthService,
    GerantService,
    Title,
    Meta,
    CartService,
    ReservationService,
    CommentairesService,
    DateService,
    NotesService,
    PhotosService,
    SessionsService,
    LoaderPageService,
    MetasService,
    DatePipe

    ],

  bootstrap: [AppComponent]
})
export class AppModule { }
