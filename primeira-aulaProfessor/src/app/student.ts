export class Student {

    private _id : number;
    private _name : string;
    private _email : string;
    private _cpf : string;

    constructor(id?: number, name?: string, email?: string, cpf?: string) {
        this._id = id;
        this._name = name;
        this._email = email;
        this._cpf = cpf;
    }

    get id() : number {
        return this._id;
    }

    set id(id : number) {
        this._id = id;
    }

    get name() : string {
        return this._name;
    }

    set name(name : string) {
        this._name = name;
    }

    get email() : string {
        return this._email;
    }

    set email(email : string) {
        this._email = email;
    }

    get cpf() : string {
        return this._cpf;
    }

    set cpf(cpf : string) {
        this._cpf = cpf;
    }

}