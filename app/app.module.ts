import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http';

// Fake Web Server Http requests
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {DataService}  from './shared/data.service';

import {AppComponent}   from './app.component';
import {ContactService} from './shared/contact.service';
import {ContactsComponent} from './contacts-component/contacts.component';
import {ContactDetailsComponent} from './contact-detail-component/contact-detail.component';
import {AdminComponent} from './admin/admin.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(DataService),
        RouterModule.forRoot([
            {
                path: 'contacts/:id',
                component: ContactDetailsComponent
            },
            {
                path: 'admin',
                component: AdminComponent
            },
            {
                path: '',
                component: ContactsComponent
            }

        ])
    ],
    declarations: [
        AppComponent,
        ContactsComponent,
        ContactDetailsComponent,
        AdminComponent
    ],
    providers: [ContactService], // available for all the app
    bootstrap: [AppComponent]
})

export class AppModule {
}
