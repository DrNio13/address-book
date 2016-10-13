import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise'; // this library will provide us the toPromise() method on the Observable

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
            .toPromise() // angular returns and Observable object but we can convert it to a more familiar Promise
            .then(response => response.json().data as Contact[])
            .catch((error) => {
                console.log(error);
                return Promise.reject(error);
            }); // on production we can do something fancier than this
    }

    getContact(id: number): Promise<Contact>{
        return this.getContacts()
            .then(contacts => contacts.find( (contact) => contact.id === id ))
            .catch((error) => {
                console.log(error);
                return Promise.reject(error);
            });
    }

    update(contact: Contact): Promise<Contact> {
        const url = `${this.httpUrl}/${contact.id}`;

        return this.http
            .put(url, JSON.stringify(contact), {headers: this.headers})
            .toPromise()
            .then()
            .catch((error) => {
                console.log(error);
                return Promise.reject(error);
            });
    }

    delete(id: number): Promise<any> {
        const url = `${this.httpUrl}/${id}`;

        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then()
            .catch((error)=>{
                console.log(error);
                return Promise.reject(error);
            });
    }

    create(contact: Contact): Promise<Contact> {
        return this.http
            .post(this.httpUrl, JSON.stringify({name: contact.name, lastName: contact.lastName, email: contact.email, country: contact.country, img: contact.img, postcard: contact.postcard}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch((error)=>{
                console.log(error);
                return Promise.reject(error);
            });
    }

}