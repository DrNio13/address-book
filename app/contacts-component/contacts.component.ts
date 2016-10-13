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
    private contacts: Contact[];
    private selectedContact: Contact;

    constructor(
        private contactService: ContactService,
        private router: Router
    ){}

    // Get contacts when the app starts
    ngOnInit(): void {
        this.getContacts();

    }

    private getContacts(): void{
        this.contactService.getContacts()
            .then(result => this.contacts = result)
            .catch(error => console.log(error));
    }

    // Get contact object on click event
    private getSelected(contact: Contact): void {
        this.selectedContact = contact;
    }

    // Go the the detail of the contact
    private goToDetails(contact: Contact): void {
        let url = ['/contacts', contact.id];
        this.router.navigate(url);
    }

    //
    private deleteContact(contact: Contact):void {
        if (window.confirm(`Are you sure you want to delete this contact ? `)){
            // Delete the contact instantly from the view
            this.contacts.splice(this.contacts.indexOf(contact),1);

            // Delete the contact using the service
            this.contactService.delete(contact.id)
                .then((r) => console.log(r))
                .catch(error=>console.log(error));
        }
        else {
            return;
        }
    }
}

