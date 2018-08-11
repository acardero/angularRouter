import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';

import { CounterService } from './services/counter.service';
import { ContactServiceService } from './contact-service.service';

import { AppComponent } from './app.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { MyAboutComponent } from './my-about/my-about.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact/contact.component';
import { MyCounterComponent } from './services/my-counter/my-counter.component';
import { MySecondCounterComponent } from './my-second-counter/my-second-counter.component';
import { ContactListServiceComponent } from './contact-list-service/contact-list-service.component';
import { ContactOverviewComponent } from './contact-overview/contact-overview.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';

const routes: Routes = [
  { path: '', component: ContactListComponent },
  { path: 'listService', component: ContactListServiceComponent },
  { path: 'home',  component: MyHomeComponent },
  { path: 'about', component: MyAboutComponent },
  { path: 'contact/:id', component: ContactComponent, 
      children: [
        { path: '', component: ContactOverviewComponent },
        { path: 'edit', component: ContactEditComponent }
      ]
  }
];

// const routes: Routes = [
//   { path: '', component: ContactListComponent },
//   { path: 'contact/:id', component: ContactComponent,
//     children: [
//       { path: '', component: ContactOverviewComponent },
//       { path: 'edit', component: ContactEditComponent }
//     ]
//   }
// ];

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    MyAboutComponent,
    ContactListComponent,
    ContactComponent,
    MyCounterComponent,
    MySecondCounterComponent,
    ContactListServiceComponent,
    ContactOverviewComponent,
    ContactEditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [CounterService, ContactServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
