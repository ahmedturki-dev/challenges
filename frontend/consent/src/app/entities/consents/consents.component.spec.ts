import { async, TestBed } from '@angular/core/testing';

import { ConsentsComponent } from './consents.component';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {ConsentService} from "../consent/consent.service";
import {ConsentsFakeDb} from "../../fake-db/ConsentsFakeDb";

describe('Consents components', () => {
  let httpMock: HttpTestingController;
  let service: ConsentService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConsentService]
    });

    service = TestBed.get(ConsentService);
    httpMock = TestBed.get(HttpTestingController);
  }));


  it('should load pre populated items ', () => {
    const returnedFromService = ConsentsFakeDb.consents;

    service.get().subscribe(types => {
      expect(types.length).toBe(2);
    });

    const req = httpMock.expectOne('api/consents');
    expect(req.request.method).toBe("GET");
    req.flush(returnedFromService);
  });
});
