import {by, element, ElementFinder} from 'protractor';

export class ConsentsPageObject {

  nameInput = element(by.id('name'));
  emailInput = element(by.id('email'));
  consentType1 = element(by.id('mat-checkbox-1'));

  giveConsentButton = element(by.id("save-consent"));


  collectedConsentsTable = element(by.id("collected-consents"));
  nextPageButton = element(by.css('[aria-label="Next page"]'));
  rows = this.collectedConsentsTable.all(by.tagName("mat-row"));
  cells = this.rows.all(by.tagName("mat-cell"));


  async setNameInput(name: string): Promise<void> {
    await this.nameInput.sendKeys(name);
  }

  async setEmailInput(email: string): Promise<void> {
    await this.emailInput.sendKeys(email);
  }

  async clickOnConsentType(): Promise<void> {
    this.consentType1.click();
  }

  getGiveConsentButton(): ElementFinder {
    return this.giveConsentButton;
  }

  getNextPageButton(): ElementFinder {
    return this.nextPageButton;
  }

}
