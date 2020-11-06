import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, ValidatorFn, Validators} from '@angular/forms';
import {ConsentModel, IConsent, IConsentType} from "../consent/consent.model";
import {ConsentService} from "../consent/consent.service";
import {ConsentTypesService} from "./consent-types.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-give-consent',
  templateUrl: './give-consent.component.html',
  styleUrls: ['./give-consent.component.scss']
})
export class GiveConsentComponent implements OnInit {
  consentTypes: any[];
  createForm = this.fb.group({
    id: [],
    name: [null, [Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
    email: [null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    consentTypes: new FormArray([], this.minSelectedCheckboxes(1))
  })


  constructor(private fb: FormBuilder, private consentService: ConsentService, private consentTypesService: ConsentTypesService, private router: Router, private matSnackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.consentTypesService.get().subscribe((res: IConsentType[]) => {
      res.forEach((item: IConsentType) => {
        (<FormArray>this.createForm.controls.consentTypes).push(this.fb.group({
          label: item.value,
          value: null
        }));
      })
    })
  }

  save(): void {
    const consent = this.createFromForm();
    this.consentService.create(consent).subscribe(
      () => this.onSaveSuccess()
    );
  }

  private onSaveSuccess(): void {
    this.router.navigate(['consents']).then(r => this.matSnackBar.open('Consent added', 'OK', {
      verticalPosition: 'top',
      duration: 2000
    }));

  }

  private createFromForm(): IConsent {
    return {
      ...new ConsentModel(),
      id: this.createForm.get(['id'])!.value,
      name: this.createForm.get(['name'])!.value,
      email: this.createForm.get(['email'])!.value,
      consentType: this.createForm.get(['consentTypes'])!.value.filter(item =>
        item.value
      ).map(item => item.label).join(', '),
    }
  }

  minSelectedCheckboxes(min = 1) {
    const validator: ValidatorFn = (formArray: FormArray) => {
      const totalSelected = formArray.controls
        .filter(control => control.get('value').value).length;

      return totalSelected >= min ? null : {required: true};
    };

    return validator;
  }
}
