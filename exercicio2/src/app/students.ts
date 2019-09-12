export class Students {

    private _id: number;
    private _name: string;
    private _email: string;
    private _phone: number;
    
    constructor (id?: number, name?: string, email?: string, phone?: number){
            this._id = id;
            this._name = name;
            this._email = email;
            this._phone = phone;
        }
        
        public get id(): number {
            return this._id;
        }
        public set id(value: number) {
            this._id = value;
        }
        
        public get name(): string {
            return this._name;
        }
        public set name(value: string) {
            this._name = value;
        }
        
        public get email(): string {
            return this._email;
        }
        public set email(value: string) {
            this._email = value;
        }

        public get phone(): number {
            return this._phone;
        }
        public set phone(value: number) {
            this._phone = value;
        }

    }