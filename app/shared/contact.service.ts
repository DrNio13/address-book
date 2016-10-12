import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Contact } from '../contact/contact';

@Injectable()
export class ContactService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private httpUrl = '../contact/contacts';

    constructor(
        private http: Http
    ){}

    getContacts(): Promise<Contact[]> {
        return this.http.get(this.httpUrl)
            .toPromise()
            .then(response => response.json().data as Contact[]);
            // .catch(this.handleError);
    }

    getContact(id: number): Promise<Contact>{
        return this.getContacts().then(contacts => contacts.find( contact => contact.id === id ));
    }

    update(contact: Contact): Promise<Contact> {
        const url = `${this.httpUrl}/${contact.id}`;

        return this.http
            .put(url, JSON.stringify(contact), {headers: this.headers})
            .toPromise()
            .then(() => contact);
    }

}