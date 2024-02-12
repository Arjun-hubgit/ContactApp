import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';

const routes: Routes = [
  //http://localhost:4200 --> '' path for 'redirection' of main page(contact manager) --http://localhost:4200/contact/admin
  {
    path: '',redirectTo:'contact/admin',pathMatch:'full'
  },
  {
    //path for contact manager component
    path:'contact/admin', component:ContactManagerComponent
  },
  {
    //path for add-contact component
    path:'contact/add', component:AddContactComponent
  },
  {
    //path for update contact component
    path:'contact/update/:Id', component:UpdateContactComponent
  },
  {
    //path for view contact component
    path:'contact/view/:contactId', component:ViewContactComponent
  },
  {
    //path for page-not-found
    path:'**', component:PageNotFoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
