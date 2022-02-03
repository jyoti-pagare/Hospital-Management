import { TestBed } from '@angular/core/testing';
import { PatserviceService } from 'src/patservice.service';



describe('PatserviceService', () => {
  let service: PatserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
