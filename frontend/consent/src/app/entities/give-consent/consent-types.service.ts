import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IConsentType} from "../consent/consent.model";

@Injectable({providedIn: 'root'})
export class ConsentTypesService {
  public resourceUrl = 'api/consent-types';

  constructor(protected http: HttpClient) {
  }

  get(): Observable<IConsentType[]> {
    return this.http.get<IConsentType[]>(this.resourceUrl);
  }

}
