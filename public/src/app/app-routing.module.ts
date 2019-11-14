import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthsComponent } from './auths/auths.component';
import { NewauthsComponent } from './newauths/newauths.component';
import { EditauthsComponent } from './editauths/editauths.component';

const routes: Routes = [
  { path: '', component: AuthsComponent },
  { path: 'new', component: NewauthsComponent },
  { path: 'edit/:id', component: EditauthsComponent },
  { path: '', pathMatch: 'full', redirectTo: '/auths' },
  { path: '**', component: AuthsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
