import { Routes } from "@angular/router";
import { BeerListComponent } from "./beer-list/beer-list.component";
import { BreweryAboutComponent } from "./brewery-about/brewery-about.component";

export const appRoutes : Routes = [
    {path:"", component:BeerListComponent},
    {path:"beers", component:BeerListComponent},
    {path:"about", component:BreweryAboutComponent}
];