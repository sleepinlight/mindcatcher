/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FragmentsService } from './fragments.service';

describe('Service: Fragments', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FragmentsService]
    });
  });

  it('should ...', inject([FragmentsService], (service: FragmentsService) => {
    expect(service).toBeTruthy();
  }));
});
