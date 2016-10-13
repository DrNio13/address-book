// Create object with the needed properties
"use strict";
var Contact = (function () {
    function Contact(id, name, lastName, email, country, img, // not required
        postcard // properties
        ) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.country = country;
        this.img = img;
        this.postcard = postcard;
    }
    return Contact;
}());
exports.Contact = Contact;
//# sourceMappingURL=contact.js.map