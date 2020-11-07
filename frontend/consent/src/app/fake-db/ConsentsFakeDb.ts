import {IConsent} from "../entities/consent/consent.model";

export class ConsentsFakeDb {
  public static consents: IConsent[] = [
    {id: 1, name: 'Bojack Horesman ', email: 'bojack@horesman.com', consentType: 'Receive newsletter, be shown targeted ads'},
    {id: 2, name: 'Princess Carolyn', email: 'princess@manager', consentType: 'Receive newsletter'}
  ];

  public static consentTypes = [
    {id: '1', value: 'Receive newsletter'},
    {id: '2', value: 'Be shown targeted ads'},
    {id: '3', value: 'Contribute to anonymous statistics'}
  ]
}
