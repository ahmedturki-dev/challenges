import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConsentsComponent} from "./entities/consents/consents.component";
import {GiveConsentComponent} from "./entities/give-consent/give-consent.component";


const routes: Routes = [{
  path: 'consents',
  component: ConsentsComponent,
}, {
  path: 'give-consent',
  component: GiveConsentComponent,
},
  {
    path: '**',
    redirectTo: 'give-consent',
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
