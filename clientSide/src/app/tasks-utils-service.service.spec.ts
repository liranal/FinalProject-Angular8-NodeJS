import { TestBed } from '@angular/core/testing';

import { TasksUtilsServiceService } from './tasks-utils-service.service';

describe('TasksUtilsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TasksUtilsServiceService = TestBed.get(TasksUtilsServiceService);
    expect(service).toBeTruthy();
  });
});
