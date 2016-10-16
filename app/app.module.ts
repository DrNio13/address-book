var BROWSER_SYNC_LOL_GLOBAL_VAR = window.name;

import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http';

// Fake Web Server Http requests
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService}  from './shared/data.service.db';

import {AppComponent}   from './app.component';
import {ContactService} from './shared/contact.service';
import {CountriesService} from './shared/countries.service';
import {ContactsComponent} from './contacts-component/contacts.component';
import {ContactFormComponent} from './contact-form.component/contact-form.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        // Configure here the routes of the app
        // Start from specific to more general urls
        RouterModule.forRoot([
            {
                path: 'contact/:id',
                component: ContactFormComponent
            },
            {
                path: 'add-contact',
                component: ContactFormComponent
            },
            {
                path: 'contacts',
                component: ContactsComponent
            },
            {
                path: '',
                redirectTo: '/contacts',
                pathMatch: 'full'
            }

        ])
    ],
    declarations: [
        AppComponent,
        ContactsComponent,
        ContactFormComponent
    ],
    providers: [
        // available for all the app
        ContactService,
        CountriesService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
