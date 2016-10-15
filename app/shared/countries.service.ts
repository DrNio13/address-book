import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise'; // this library will provide us the toPromise() method on the Observable

@Injectable()
export class CountriesService {

    private httpUrl = '../countries/countries';

    constructor(private http: Http) {}

    getCountries(): Promise<any[]> {
        return this.http.get(this.httpUrl)
            .toPromise()
            .then(response => response.json().data)
            .catch(error => {
                console.log('hello',error, this.http.get(this.httpUrl));
                return Promise.reject(error);
            });
    }
}

