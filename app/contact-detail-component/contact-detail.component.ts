import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Contact } from '../contact/contact';
import { ContactService } from '../shared/contact.service';

@Component({
    moduleId: module.id,
    selector: 'contact-detail',
    templateUrl: './contact-detail.component.html',
    styleUrls: ['./contact-detail.component.css']
})

export class ContactDetailsComponent implements OnInit{

    contact: Contact;
    contacts: Contact[];

    constructor(
        private contactService: ContactService,
        private route: ActivatedRoute
    ){}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id']; // convert string id to number
            this.contactService.getContact(id) // find the specific contact based on the id
                .then(contact => this.contact = contact)
                .catch(error => console.log(error));
        });

        // show the list for deletion
        this.contactService.getContacts()
            .then((contacts)=> this.contacts = contacts)
            .catch(error => console.log(error));
    }

    private saveContact():void {
        this.contactService.update(this.contact)
            .then( () => window.alert("Contact has been successfully saved! :)") )
            .catch(()=> console.log("Error dude"));
    }
}