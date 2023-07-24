import { TestBed } from '@angular/core/testing';

import { ImageExporterService } from './image-exporter.service';

describe('ImageExporterService', () => {
  let service: ImageExporterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageExporterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
