export class Clients{

    private _id: number;
    private _name: string;
    private _email: string;
    private _phone: number;
    private _cpf: number;
    private _born: Date;
    
    constructor (id?: number, name?: string, email?: string, phone?: number, 
        cpf?: number, born?: Date){
            this._id = id;
            this._name = name;
            this._email = email;
            this._phone = phone;
            this._cpf = cpf;
            this._born = born;
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

        public get cpf(): number {
            return this._cpf;
        }
        public set cpf(value: number) {
            this._cpf = value;
        }
        
        public get born(): Date {
            return this._born;
        }
        public set born(value: Date) {
            this._born = value;
        }
    }