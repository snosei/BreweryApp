import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerCartComponent } from './beer-cart/beer-cart.component';
import { BeerDataService } from "./beer-data.service";
import { BeerCartService } from "./beer-cart.service";
import { BreweryAboutComponent } from './brewery-about/brewery-about.component';
import { appRoutes } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    BeerCartComponent,
    BreweryAboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BeerDataService, BeerCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
