import { TestBed } from '@angular/core/testing';

import { AppVotacionesService } from './app-votaciones.service';

describe('AppVotacionesService', () => {
  let service: AppVotacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppVotacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
