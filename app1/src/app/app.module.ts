import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { TroisiemeComponent } from './troisieme/troisieme.component';
import { DataService} from './shared/data.service';
import { RouterModule, Routes} from '@angular/router';
import { PresentationComponent } from './presentation/presentation.component';
import { Page404Component } from './page404/page404.component';

const ROUTES:Routes = [

  {path:'second', component: SecondComponent},
  {path:'troisieme', component: TroisiemeComponent},
  {path:'troisieme/param', component: TroisiemeComponent},
  {path:'', redirectTo: 'second', pathMatch:'full'},
  {path:'**', component:PresentationComponent},
  {path:'**', component:Page404Component},




];
@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    TroisiemeComponent,
    Page404Component,
    PresentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

