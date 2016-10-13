// Create object with the needed properties

export class Contact {
    constructor(
        public id: number,
        public name: string,
        public lastName: string,
        public email: string,
        public country: string,
        public img?: string, // not required
        public postcard?: string // properties
    ){}
}