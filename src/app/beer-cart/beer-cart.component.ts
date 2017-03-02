import { Component, OnInit } from '@angular/core';
import { BeerCartService } from "../beer-cart.service";

@Component({
  selector: 'app-beer-cart',
  templateUrl: './beer-cart.component.html',
  styleUrls: ['./beer-cart.component.css']
})
export class BeerCartComponent implements OnInit {

  beers = [];

  constructor(private beerCartService : BeerCartService) { }

  ngOnInit() {
    this.beerCartService.items.subscribe(data => this.beers = data);
  }

  calcSubtotal(beer){
    return beer.price*beer.quantity;
  }

  calcTotal(){
    let total = 0;
    this.beers.forEach(beer => total += this.calcSubtotal(beer));
    return total;
  }

}
