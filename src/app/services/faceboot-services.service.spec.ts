import { TestBed } from '@angular/core/testing';

import { FacebootServicesService } from './faceboot-services.service';

describe('FacebootServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FacebootServicesService = TestBed.get(FacebootServicesService);
    expect(service).toBeTruthy();
  });
});
