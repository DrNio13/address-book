import {Component, OnInit} from '@angular/core';

import { Contact } from './contact/contact';
import { ContactService } from './shared/contact.service';

@Component({
    selector: 'address-book',
    templateUrl: 'app/app.component.html'
})

// Use the OnInit interface to get the contacts on the initial lifecycle of the app
export class AppComponent implements OnInit {
    contacts: Contact[];
    selectedContact: Contact;

    constructor(
        private contactService: ContactService
    ){}

    getContacts(): void{
        this.contactService.getContacts()
            .then(result => this.contacts = result);
    }

    // get contacts when the app starts
    ngOnInit(): void {
        this.getContacts();
    }

    // Get contact object on click event
    getSelected(contact: Contact): void {
        this.selectedContact = contact;
    }

    // Delete contact object
    deleteContact(contact: Contact): void {
        this.contacts.splice(this.contacts.indexOf(contact), 1);
    }
}