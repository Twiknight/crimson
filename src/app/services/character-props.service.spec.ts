import { TestBed, inject } from '@angular/core/testing';

import { CharacterPropsService } from './character-props.service';

describe('CharacterPropsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharacterPropsService]
    });
  });

  it('should be created', inject([CharacterPropsService], (service: CharacterPropsService) => {
    expect(service).toBeTruthy();
  }));
});
