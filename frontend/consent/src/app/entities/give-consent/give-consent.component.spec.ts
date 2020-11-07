import {async, getTestBed, TestBed} from '@angular/core/testing';

import {GiveConsentComponent} from './give-consent.component';
import {ConsentTypesService} from "./consent-types.service";
import {ConsentsFakeDb} from "../../fake-db/ConsentsFakeDb";
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('GiveConsentComponent', () => {
  let httpMock: HttpTestingController;
  let service: ConsentTypesService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConsentTypesService]
    });

    service = TestBed.get(ConsentTypesService);
    httpMock = TestBed.get(HttpTestingController);
  }));


  it('should load types ', () => {
    const returnedFromService = ConsentsFakeDb.consentTypes;

    service.get().subscribe(types => {
      expect(types.length).toBe(3);
    });

    const req = httpMock.expectOne('api/consent-types');
    expect(req.request.method).toBe("GET");
    req.flush(returnedFromService);
  });
});
