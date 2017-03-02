/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BeerCartService } from './beer-cart.service';

describe('BeerCartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeerCartService]
    });
  });

  it('should ...', inject([BeerCartService], (service: BeerCartService) => {
    expect(service).toBeTruthy();
  }));
});
