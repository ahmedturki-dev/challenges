import {ConsentsPageObject} from "./consents.page-object";
import {browser} from "protractor";

describe('Give consent e2e test', () => {

  let consentsPageObject: ConsentsPageObject;

  beforeAll(async () => {
    await browser.get('/');
  });

  it('Give consent btn should be disabled by default', async () => {
    consentsPageObject = new ConsentsPageObject();
    const btn = await consentsPageObject.getGiveConsentButton();
    expect(btn.isEnabled()).toEqual(false);
  })


  it('Give consent btn should be enabled after filling form data', async () => {
    consentsPageObject = new ConsentsPageObject();
    await consentsPageObject.setNameInput("manager");
    await consentsPageObject.setEmailInput("manager@gmail.com");
    await consentsPageObject.clickOnConsentType();

    const btn = await consentsPageObject.getGiveConsentButton();
    expect(btn.isEnabled()).toEqual(true);

  })

  it('save consent and check element in table view', async () => {
    consentsPageObject = new ConsentsPageObject();

    const btn = await consentsPageObject.getGiveConsentButton();
    expect(btn.isEnabled()).toEqual(true);
    await consentsPageObject.getGiveConsentButton().click();
    expect(await consentsPageObject.collectedConsentsTable.isDisplayed()).toBeTruthy();
    expect(await consentsPageObject.nextPageButton.isDisplayed()).toBeTruthy();

    await consentsPageObject.getNextPageButton().click();


    expect(await consentsPageObject.cells.get(0).getText()).toEqual("manager");
    expect(await consentsPageObject.cells.get(1).getText()).toEqual("manager@gmail.com");
    expect(await consentsPageObject.cells.get(2).getText()).toEqual("Receive newsletter");

  })

})
