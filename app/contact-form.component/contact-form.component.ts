import {Component, OnInit} from '@angular/core';
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
        private contactService: ContactService
    ){}

    onSubmit() {
        this.submitted = true;
    }

    getContacts(): void {
        this.contactService
            .getContacts()
            .then(contacts => this.contacts = contacts);
    }

    ngOnInit(): void {
        this.getContacts();
    }

    private addContact(contact: Contact): void {

        this.contactService.create(contact)
            .then(contact => {
                this.contacts.push(contact);
            });


        window.alert(`Contact ${contact.name} saved`);
    }
}