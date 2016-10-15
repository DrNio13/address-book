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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var contact_service_1 = require('../shared/contact.service');
var contact_1 = require('../contact/contact');
var countries_service_1 = require('../shared/countries.service');
var ContactFormComponent = (function () {
    function ContactFormComponent(contactService, route, countryService) {
        this.contactService = contactService;
        this.route = route;
        this.countryService = countryService;
        this.countries = [];
        this.contact = new contact_1.Contact(10, '', '', '', '');
        this.selected = false;
    }
    ContactFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCountries();
        this.getContacts();
        if (this.route.params['_value'].id) {
            this.selected = true;
            this.route.params.forEach(function (params) {
                var id = +params['id']; // convert string id to number
                _this.contactService.getContact(id) // find the specific contact based on the id
                    .then(function (contact) { return _this.contact = contact; })
                    .catch(function (error) { return console.log(error); });
            });
        }
        // show the list for deletion
        this.contactService.getContacts()
            .then(function (contacts) { return _this.contacts = contacts; })
            .catch(function (error) { return console.log(error); });
    };
    ContactFormComponent.prototype.getContacts = function () {
        var _this = this;
        this.contactService
            .getContacts()
            .then(function (contacts) { return _this.contacts = contacts; });
    };
    ContactFormComponent.prototype.addContact = function (contact) {
        var _this = this;
        this.contactService.create(contact)
            .then(function (contact) {
            _this.contacts.push(contact);
        });
        window.alert("Contact " + contact.name + " added!");
    };
    ContactFormComponent.prototype.getCountries = function () {
        var _this = this;
        this.countryService.getCountries()
            .then(function (countries) {
            _this.countries = countries;
            console.log(countries);
        })
            .catch(function (e) { return console.log('error', e); });
    };
    ContactFormComponent.prototype.updateContact = function (contact) {
        this.contactService.update(contact)
            .then(function () { return window.alert("Contact " + contact.name + " saved."); })
            .catch(function () { return window.alert('Something went wrong'); });
    };
    ContactFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'contact-form',
            templateUrl: 'contact-form.component.html',
            styleUrls: ['contact-form.component.css']
        }), 
        __metadata('design:paramtypes', [contact_service_1.ContactService, router_1.ActivatedRoute, countries_service_1.CountriesService])
    ], ContactFormComponent);
    return ContactFormComponent;
}());
exports.ContactFormComponent = ContactFormComponent;
//# sourceMappingURL=contact-form.component.js.map