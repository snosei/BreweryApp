import { Injectable } from '@angular/core';
import { Beer } from "./beer-list/beer";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class BeerCartService {

  private _items: Beer[] = [];
  private _itemsSubject: BehaviorSubject<Beer[]> = new BehaviorSubject(this._items);
  public items: Observable<Beer[]> = this._itemsSubject.asObservable();

  constructor() { }

  addToCart(beer: Beer){
    let newBeer = Object.assign({},beer);
    let yaPuesto = false;
    this._items.forEach( (b : Beer) => {
      if(b.name == newBeer.name){
        yaPuesto = true;
        b.quantity += newBeer.quantity;
      }
    });
    if(!(yaPuesto)){
      this._items.push(newBeer);
    }
    this._itemsSubject.next(this._items);
  }

  getItems(){
    return this._items;
  }

}
