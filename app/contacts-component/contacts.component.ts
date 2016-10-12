import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Contact } from '../contact/contact';
import { ContactService } from '../shared/contact.service';

@Component({
    moduleId: module.id,
    selector: 'contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['contacts.component.css']
})
export class ContactsComponent implements OnInit{
    contacts: Contact[];
    selectedContact: Contact;

    constructor(
        private contactService: ContactService,
        private router: Router
    ){}

    getContacts(): void{
        this.contactService.getContacts()
            .then(result => this.contacts = result);
    }

    // Get contacts when the app starts
    ngOnInit(): void {
        this.getContacts();
    }

    // Get contact object on click event
    getSelected(contact: Contact): void {
        this.selectedContact = contact;
    }

    // Go the the detail of the contact
    goToDetails(contact: Contact): void {
        let url = ['/contacts', contact.id];
        this.router.navigate(url);
    }
}

