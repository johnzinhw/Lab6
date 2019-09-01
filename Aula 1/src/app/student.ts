export class Student {
    
    private _id: number;
    private _nameA : string;
    private _email : string;
    private _cpfA : string;

    constructor(id?: number, nameA?: string, email?: string, cpfA?:string){
        this._id=id;
        this._nameA=nameA;
        this._email=email;
        this._cpfA=cpfA;

    }

    get id () : number{
        return this._id;
    }

    set id(id: number){
        this._id=id;
    }

    get nameA () : string{
        return this._nameA;
    }

    set nameA(name: string){
        this._nameA = name;
    }

    get email () : string{
        return this._email;
    }

    set email(email: string){
        this._email = email;
    }

    get cpfA () : string{
        return this._cpfA;
    }

    set cpfA(cpf: string){
        this._cpfA = cpf;
    }

}