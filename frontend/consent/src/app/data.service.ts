import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Injectable} from "@angular/core";
import {ConsentsFakeDb} from "./fake-db/ConsentsFakeDb";

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() {
  }

  createDb(): any {
    return {
      'consents': ConsentsFakeDb.consents,
      'consent-types': ConsentsFakeDb.consentTypes
    }
  }
}
