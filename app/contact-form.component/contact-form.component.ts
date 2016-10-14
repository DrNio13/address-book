import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import {ContactService} from '../shared/contact.service';
import {Contact} from '../contact/contact';

@Component({
    moduleId: module.id,
    selector: 'contact-form',
    templateUrl: 'contact-form.component.html',
    styleUrls: ['contact-form.component.css']
})

export class ContactFormComponent implements OnInit{
    private countries = ['Greece', 'Andora']; // fetch from json
    private submitted = false;
    private contact = new Contact(10,'', '', '', '');
    contacts: Contact[];

    constructor(
        private contactService: ContactService,
        private route: ActivatedRoute
    ){}

    ngOnInit(): void {
        this.getContacts();
        console.log(this.route.params);
        if (this.route.params['_value'].id) {
            this.route.params.forEach((params: Params) => {
                let id = +params['id']; // convert string id to number
                this.contactService.getContact(id) // find the specific contact based on the id
                    .then(contact => this.contact = contact)
                    .catch(error => console.log(error));
            });
        }

        // show the list for deletion
        this.contactService.getContacts()
            .then((contacts)=> this.contacts = contacts)
            .catch(error => console.log(error));
    }

    onSubmit() {
        this.submitted = true;
    }

    getContacts(): void {
        this.contactService
            .getContacts()
            .then(contacts => this.contacts = contacts);
    }

    private addContact(contact: Contact): void {

        this.contactService.create(contact)
            .then(contact => {
                this.contacts.push(contact);
            });

        window.alert(`Contact ${contact.name} saved`);
    }
}