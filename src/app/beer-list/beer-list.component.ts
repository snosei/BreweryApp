import { Component, OnInit } from '@angular/core';
import { Beer } from "./beer";
import { BeerDataService } from "../beer-data.service";
import { BeerCartService } from "../beer-cart.service";

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {

  beers: Beer[];

  constructor(private beerDataService : BeerDataService, private beerCartService: BeerCartService ) {}

  ngOnInit() {
    this.beerDataService.getBeers().subscribe(beers => this.beers = beers);
  }

  addToCart(beer){
    if(beer.quantity>0){
      this.beerCartService.addToCart(beer);
      beer.stock -= beer.quantity;
      beer.quantity = 0;
    }
  }

  upQuantity(beer){
    beer.quantity++;
  }

  downQuantity(beer){
    beer.quantity--;
  }

  checkQuantity(beer){
    if(beer.quantity>beer.stock){
      beer.quantity = beer.stock;
    }
    if(beer.quantity<0){
      beer.quantity=0;
    }
  }

}
