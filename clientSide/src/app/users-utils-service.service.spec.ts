import { TestBed } from '@angular/core/testing';

import { UsersUtilsServiceService } from './users-utils-service.service';

describe('UsersUtilsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersUtilsServiceService = TestBed.get(UsersUtilsServiceService);
    expect(service).toBeTruthy();
  });
});
