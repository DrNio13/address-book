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
var contact_service_1 = require('./shared/contact.service');
var AppComponent = (function () {
    function AppComponent(contactService) {
        this.contactService = contactService;
    }
    AppComponent.prototype.getContacts = function () {
        var _this = this;
        this.contactService.getContacts()
            .then(function (result) { return _this.contacts = result; });
    };
    // get contacts when the app starts
    AppComponent.prototype.ngOnInit = function () {
        this.getContacts();
    };
    // Get contact object on click event
    AppComponent.prototype.getSelected = function (contact) {
        this.selectedContact = contact;
    };
    // Delete contact object
    AppComponent.prototype.deleteContact = function (contact) {
        this.contacts.splice(this.contacts.indexOf(contact), 1);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'address-book',
            templateUrl: 'app/app.component.html'
        }), 
        __metadata('design:paramtypes', [contact_service_1.ContactService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map