export interface IConsent {
  id?: number,
  name?: string;
  email?: string;
  consentType?: string;
}

export class ConsentModel implements IConsent {
  constructor(
    public id?: number,
    public name?: string,
    public email?: string,
    public consentType?: string
  ) {
  }
}

export interface IConsentType {
  id?: number,
  value?: string;
}

export class ConsentTypeModel implements IConsentType {
  constructor(
    public id?: number,
    public value?: string,
  ) {
  }
}
