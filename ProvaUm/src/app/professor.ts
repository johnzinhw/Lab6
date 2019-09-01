export class Professor {
    
    private _id: number;
    private _name : string;
    private _disciplina : string;
    private _professor : string;
    private _ano : string;
    private _semestre : string;

    constructor(id?: number, name?: string, disciplina?: string, professor?:string, 
                ano?: string, semestre?: string){

        this._id=id;
        this._name=name;
        this._disciplina=disciplina;
        this._professor=professor;
        this._ano=ano;
        this._semestre=semestre;

    }

    get id () : number{
        return this._id;
    }

    set id(id: number){
        this._id=id;
    }

    get name () : string{
        return this._name;
    }

    set name(name: string){
        this._name=name;
    }

    get disciplina () : string{
        return this._name;
    }

    set disciplina(disciplina: string){
        this._disciplina=disciplina;
    }

    get professor () : string{
        return this._professor;
    }

    set professor(professor: string){
        this._professor=professor;
    }

    get ano () : string{
        return this._ano;
    }

    set ano(ano: string){
        this._ano=ano;
    }

    get semestre () : string{
        return this._semestre;
    }

    set semestre(semestre: string){
        this._semestre=semestre;
    }

    
}