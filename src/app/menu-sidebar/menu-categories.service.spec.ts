/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MenuCategoriesService } from './menu-categories.service';

describe('Service: MenuCategories', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuCategoriesService]
    });
  });

  it('should ...', inject([MenuCategoriesService], (service: MenuCategoriesService) => {
    expect(service).toBeTruthy();
  }));
});
