/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LinkprocessorService } from './linkprocessor.service';

describe('Service: Linkprocessor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LinkprocessorService]
    });
  });

  it('should ...', inject([LinkprocessorService], (service: LinkprocessorService) => {
    expect(service).toBeTruthy();
  }));
});
