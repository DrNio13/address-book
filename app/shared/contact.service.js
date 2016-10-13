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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise'); // this library will provide us the toPromise() method on the Observable
var ContactService = (function () {
    function ContactService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.httpUrl = '../contact/contacts';
    }
    ContactService.prototype.getContacts = function () {
        return this.http.get(this.httpUrl)
            .toPromise() // angular returns and Observable object but we can convert it to a more familiar Promise
            .then(function (response) { return response.json().data; })
            .catch(function (error) {
            console.log(error);
            return Promise.reject(error);
        }); // on production we can do something fancier than this
    };
    ContactService.prototype.getContact = function (id) {
        return this.getContacts()
            .then(function (contacts) { return contacts.find(function (contact) { return contact.id === id; }); })
            .catch(function (error) {
            console.log(error);
            return Promise.reject(error);
        });
    };
    ContactService.prototype.update = function (contact) {
        var url = this.httpUrl + "/" + contact.id;
        return this.http
            .put(url, JSON.stringify(contact), { headers: this.headers })
            .toPromise()
            .then()
            .catch(function (error) {
            console.log(error);
            return Promise.reject(error);
        });
    };
    ContactService.prototype.delete = function (id) {
        var url = this.httpUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then()
            .catch(function (error) {
            console.log(error);
            return Promise.reject(error);
        });
    };
    ContactService.prototype.create = function (contact) {
        return this.http
            .post(this.httpUrl, JSON.stringify({ name: contact.name, lastName: contact.lastName, email: contact.email, country: contact.country, img: contact.img, postcard: contact.postcard }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(function (error) {
            console.log(error);
            return Promise.reject(error);
        });
    };
    ContactService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ContactService);
    return ContactService;
}());
exports.ContactService = ContactService;
//# sourceMappingURL=contact.service.js.map