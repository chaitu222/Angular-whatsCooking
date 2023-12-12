import { TestBed } from '@angular/core/testing';

import { AdminrecipesService } from './adminrecipes.service';

describe('AdminrecipesService', () => {
  let service: AdminrecipesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminrecipesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
