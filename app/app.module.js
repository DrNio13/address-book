"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var BROWSER_SYNC_LOL_GLOBAL_VAR = window.name;
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
// Fake Web Server Http requests
var angular_in_memory_web_api_1 = require('angular-in-memory-web-api');
var data_service_db_1 = require('./shared/data.service.db');
var app_component_1 = require('./app.component');
var contact_service_1 = require('./shared/contact.service');
var countries_service_1 = require('./shared/countries.service');
var contacts_component_1 = require('./contacts-component/contacts.component');
var contact_form_component_1 = require('./contact-form.component/contact-form.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(data_service_db_1.InMemoryDataService),
                // Configure here the routes of the app
                // Start from specific to more general urls
                router_1.RouterModule.forRoot([
                    {
                        path: 'contacts/:id',
                        component: contact_form_component_1.ContactFormComponent
                    },
                    {
                        path: 'admin',
                        component: contact_form_component_1.ContactFormComponent
                    },
                    {
                        path: '',
                        component: contacts_component_1.ContactsComponent
                    }
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                contacts_component_1.ContactsComponent,
                contact_form_component_1.ContactFormComponent
            ],
            providers: [
                // available for all the app
                contact_service_1.ContactService,
                countries_service_1.CountriesService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map