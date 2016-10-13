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
var ContactsComponent = (function () {
    function ContactsComponent(contactService, router) {
        this.contactService = contactService;
        this.router = router;
    }
    // Get contacts when the app starts
    ContactsComponent.prototype.ngOnInit = function () {
        this.getContacts();
    };
    ContactsComponent.prototype.getContacts = function () {
        var _this = this;
        this.contactService.getContacts()
            .then(function (result) { return _this.contacts = result; })
            .catch(function (error) { return console.log(error); });
    };
    // Get contact object on click event
    ContactsComponent.prototype.getSelected = function (contact) {
        this.selectedContact = contact;
    };
    // Go the the detail of the contact
    ContactsComponent.prototype.goToDetails = function (contact) {
        var url = ['/contacts', contact.id];
        this.router.navigate(url);
    };
    //
    ContactsComponent.prototype.deleteContact = function (contact) {
        if (window.confirm("Are you sure you want to delete this contact ? ")) {
            // Delete the contact instantly from the view
            this.contacts.splice(this.contacts.indexOf(contact), 1);
            // Delete the contact using the service
            this.contactService.delete(contact.id)
                .then(function (r) { return console.log(r); })
                .catch(function (error) { return console.log(error); });
        }
        else {
            return;
        }
    };
    ContactsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'contacts',
            templateUrl: './contacts.component.html',
            styleUrls: ['contacts.component.css']
        }), 
        __metadata('design:paramtypes', [contact_service_1.ContactService, router_1.Router])
    ], ContactsComponent);
    return ContactsComponent;
}());
exports.ContactsComponent = ContactsComponent;
//# sourceMappingURL=contacts.component.js.map