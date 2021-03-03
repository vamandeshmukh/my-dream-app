import { TestBed } from '@angular/core/testing';

import { ServerConnectService } from './server-connect.service';

describe('ServerConnectService', () => {
  let service: ServerConnectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerConnectService);
  });

  // it(`should give output as welcome`, () => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(ServerConnectService);
  //   expect(service.getBaseUrl).toEqual(`welcome`);
  // });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
