import { TestBed, inject } from '@angular/core/testing';

import { GetWidthService } from './get-width.service';

describe('GetWidthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetWidthService]
    });
  });

  it('should be created', inject([GetWidthService], (service: GetWidthService) => {
    expect(service).toBeTruthy();
  }));
});
