import { TestBed } from '@angular/core/testing';

import { PostUtilsServiceService } from './post-utils-service.service';

describe('PostUtilsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostUtilsServiceService = TestBed.get(PostUtilsServiceService);
    expect(service).toBeTruthy();
  });
});
