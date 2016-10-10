import { Contact } from '../contact/contact';
import { CONTACTS } from './mock-contacts';
import { Injectable } from '@angular/core';

@Injectable()
export class ContactService {

    getContacts(): Promise<Contact[]> {
        return Promise.resolve(CONTACTS);
    }

}