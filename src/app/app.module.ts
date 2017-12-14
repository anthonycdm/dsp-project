import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { LANGUE, GMAP_KEY } from './globals/index';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes} from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { AProposComponent } from './views/a-propos/index';
import { AccueilComponent } from './views/accueil/index';
import { ActivitesComponent } from './views/activites/index';
import { PageNotFoundComponent } from './views/page-not-found/index';
import { HeaderComponent } from './views/header/index';
import { FooterComponent } from './views/footer/index';
import { LoginComponent, LoginOrderComponent } from './views/login/index';
import { DetailsActiviteComponent } from './views/details-activite/index';
import { AdminMenuComponent,AdminHomeComponent, AdminLoginComponent, AdminHomeActiviteComponent,
         AddActiviteComponent, UpdateActiviteComponent } from './views/admin/index';
import { UserService, LoginService, ActivitesService, AuthService, CartService, DateService,
         GerantService, ReservationService, NotesService, CommentairesService } from './services/index';
import { AuthguardGuard, AdminGuard } from './views/guards/index';
import { ConfirmDirective } from './directives/index';
import { BackComponent } from './views/utils/index';
import { SliderComponent } from './views/utils/slider/slider.component';
import { DatepickerComponent } from './views/utils/index';
import { DropdownHeaderComponent } from './views/utils/index';
import { RatingComponent } from './views/utils/index';
import { TimepickerComponent } from './views/utils/index';
import { SliderActivitePhotoComponent } from './views/utils/index';
import { PhotoRatingComponent } from './views/utils/photo-rating/index';
import { GmapAproposComponent } from './views/utils/gmaps/gmap-apropos/index';
import { GmapActiviteComponent } from './views/utils/gmaps/gmap-activite/index';
import { ReservationsComponent } from './views/reservations/index';
import { MonCompteComponent } from './views/mon-compte/mon-compte.component';
import { PanierComponent } from './views/panier/index';
import { ValidcmdComponent } from './views/utils/validcmd/validcmd.component';
import { CommentsComponent } from './views/utils/comments/comments.component';
import { AdminCommentairesComponent } from './views/admin/admin-commentaires/admin-commentaires.component';
import { AdminClientsComponent } from './views/admin/admin-clients/clients.component';
import { AdminClientComponent } from './views/admin/admin-client/client.component';
import { AdminCommentaireComponent } from './views/admin/admin-commentaire/admin-commentaire.component';
/*import { FormValidateDirective } from './show-errors/form-validate.directive';*/



const appRoutes: Routes = [
   { path: '', component: AccueilComponent },
   { path: 'login',   component: LoginComponent },
   { path: 'a-propos', component: AProposComponent },
   { path: 'admin/login', component:AdminLoginComponent},
   { path: 'admin/home', component:AdminHomeComponent, canActivate:[AdminGuard]},
   { path: 'admin/activites', component:AdminHomeActiviteComponent, canActivate:[AdminGuard]},
   { path: 'admin/add-activite', component: AddActiviteComponent, canActivate:[AdminGuard] },
   { path: 'admin/update-activite/:id', component: UpdateActiviteComponent, canActivate:[AdminGuard] },
   { path: 'admin/commentaires', component:AdminCommentairesComponent, canActivate:[AdminGuard]},
   { path: 'admin/commentaire/:id', component:AdminCommentaireComponent, canActivate:[AdminGuard]},
   { path: 'admin/clients', component:AdminClientsComponent, canActivate:[AdminGuard]},
   { path: 'admin/client/:id', component:AdminClientComponent, canActivate:[AdminGuard]},
   { path: 'activites', component: ActivitesComponent },
   { path: 'activite/:id', component: DetailsActiviteComponent },
   { path: 'loginOrder', component: LoginOrderComponent, canActivate:[AuthguardGuard] },
   { path: 'mon-panier', component: PanierComponent},
   { path: 'mon-compte', component: MonCompteComponent, canActivate:[AuthguardGuard] },
   { path: 'mes-reservations', component: ReservationsComponent, canActivate:[AuthguardGuard] },
   { path: '**', component: PageNotFoundComponent }


];


@NgModule({
  declarations: [
    AppComponent ,
   HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    AccueilComponent,
    LoginComponent,
    ActivitesComponent,
    AProposComponent,
    LoginOrderComponent,
    DetailsActiviteComponent,
    AdminHomeComponent,
    AdminLoginComponent,
    //FormValidateDirective,
    AddActiviteComponent,
    UpdateActiviteComponent,
    AdminHomeActiviteComponent,
    AdminMenuComponent,
    ConfirmDirective,
    BackComponent,
    SliderComponent,
    DatepickerComponent,
    DropdownHeaderComponent,
    RatingComponent,
    TimepickerComponent,
    SliderActivitePhotoComponent,
    PhotoRatingComponent,
    GmapAproposComponent,
    GmapActiviteComponent,
    ReservationsComponent,
    MonCompteComponent,
    PanierComponent,
    ValidcmdComponent,
    CommentsComponent,
    AdminCommentairesComponent,
    AdminClientsComponent,
    AdminClientComponent,
    AdminCommentaireComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    NgbModule.forRoot(),
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: GMAP_KEY
    }),
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [
    ActivitesService,
    LoginService,
    UserService,
    AuthService,
    GerantService,
    CartService,
    ReservationService,
    CommentairesService,
    DateService,
    NotesService,
    DatePipe,
    AuthguardGuard,
    AdminGuard,
     { provide: LOCALE_ID, useValue: LANGUE }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
