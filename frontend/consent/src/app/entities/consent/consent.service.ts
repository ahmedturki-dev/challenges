import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IConsent} from "./consent.model";

@Injectable({providedIn: 'root'})
export class ConsentService {
  public resourceUrl = 'api/consents';

  constructor(protected http: HttpClient) {
  }

  create(consent: IConsent): Observable<IConsent> {
    return this.http.post<IConsent>(this.resourceUrl, consent);
  }

  get(): Observable<IConsent[]> {
    return this.http.get<IConsent[]>(this.resourceUrl);
  }

}
