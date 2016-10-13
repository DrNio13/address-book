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
var contact_service_1 = require('../shared/contact.service');
var contact_1 = require('../contact/contact');
var ContactFormComponent = (function () {
    function ContactFormComponent(contactService) {
        this.contactService = contactService;
        this.countries = ['Greece', 'Andora']; // fetch from json
        this.submitted = false;
        this.contact = new contact_1.Contact(10, '', '', '', '');
    }
    ContactFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
    };
    ContactFormComponent.prototype.getContacts = function () {
        var _this = this;
        this.contactService
            .getContacts()
            .then(function (contacts) { return _this.contacts = contacts; });
    };
    ContactFormComponent.prototype.ngOnInit = function () {
        this.getContacts();
    };
    ContactFormComponent.prototype.addContact = function (contact) {
        var _this = this;
        this.contactService.create(contact)
            .then(function (contact) {
            _this.contacts.push(contact);
        });
        window.alert("Contact " + contact.name + " saved");
    };
    ContactFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'contact-form',
            templateUrl: 'contact-form.component.html',
            styleUrls: ['contact-form.component.css']
        }), 
        __metadata('design:paramtypes', [contact_service_1.ContactService])
    ], ContactFormComponent);
    return ContactFormComponent;
}());
exports.ContactFormComponent = ContactFormComponent;
//# sourceMappingURL=contact-form.component.js.map