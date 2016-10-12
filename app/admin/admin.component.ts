import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Contact } from '../contact/contact';
import { ContactService } from '../shared/contact.service';

@Component({
    moduleId: module.id,
    selector: 'admin',
    templateUrl: './admin.component.html',
    styleUrls: ['../contact-detail-component/contact-detail.component.css']
})

export class AdminComponent implements OnInit {

    contact: Contact;
    contacts: Contact[];

    constructor(
        private contactService: ContactService,
        private route: ActivatedRoute,
        private location: Location
    ){}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id']; // convert string id to number
            this.contactService.getContact(id) // find the specific contact based on the id
                .then(contact => this.contact = contact);
        });

        // show the list for deletion
        this.contactService.getContacts()
            .then((contacts)=> this.contacts = contacts);
    }

    goBack(): void {
        this.location.back();
    }
}