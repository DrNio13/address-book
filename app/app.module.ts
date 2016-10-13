var BROWSER_SYNC_LOL_GLOBAL_VAR = window.name;

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
import {ContactFormComponent} from './contact-form.component/contact-form.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(DataService),
        // Configure here the routes of the app
        // Start from specific to more general urls
        RouterModule.forRoot([
            {
                path: 'contacts/:id',
                component: ContactDetailsComponent
            },
            {
                path: 'admin',
                component: ContactFormComponent
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
        // AdminComponent,
        ContactFormComponent
    ],
    providers: [ContactService], // available for all the app
    bootstrap: [AppComponent]
})

export class AppModule {
}
