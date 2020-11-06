import {IConsent} from "../entities/consent/consent.model";

export class ConsentsFakeDb {
  public static consents: IConsent[] = [
    {id: 1, name: 'toto', email: 'Hydrogen', consentType: 'news'},
    {id: 2, name: 'tobi', email: 'Hydrogen', consentType: 'anonymous'},
    {id: 3, name: 'tobi', email: 'Hydrogen', consentType: 'anonymous'}
  ];

  public static consentTypes = [
    {id: '1', value: 'Receive newsletter'},
    {id: '2', value: 'Be shown targeted ads'},
    {id: '3', value: 'Contribute to anonymous statistics'}
  ]
}
