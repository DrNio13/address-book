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
var ContactDetailsComponent = (function () {
    function ContactDetailsComponent(contactService, route) {
        this.contactService = contactService;
        this.route = route;
    }
    ContactDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id']; // convert string id to number
            _this.contactService.getContact(id) // find the specific contact based on the id
                .then(function (contact) { return _this.contact = contact; })
                .catch(function (error) { return console.log(error); });
        });
        // show the list for deletion
        this.contactService.getContacts()
            .then(function (contacts) { return _this.contacts = contacts; })
            .catch(function (error) { return console.log(error); });
    };
    ContactDetailsComponent.prototype.saveContact = function () {
        this.contactService.update(this.contact)
            .then(function () { return window.alert("Contact has been successfully saved! :)"); })
            .catch(function () { return console.log("Error dude"); });
    };
    ContactDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'contact-detail',
            templateUrl: './contact-detail.component.html',
            styleUrls: ['./contact-detail.component.css']
        }), 
        __metadata('design:paramtypes', [contact_service_1.ContactService, router_1.ActivatedRoute])
    ], ContactDetailsComponent);
    return ContactDetailsComponent;
}());
exports.ContactDetailsComponent = ContactDetailsComponent;
//# sourceMappingURL=contact-detail.component.js.map