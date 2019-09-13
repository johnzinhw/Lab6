export class States {

    private _id: number;
    private _cep: number;
    private _cidade: string;
    private _estado: string;
    
    constructor (id?: number, cep?: number, cidade?: string, estado?: string){
        this._id = id;
        this._cep=cep;
        this._cidade=cidade;
        this._estado=estado;
    }
    
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    
    public get cep(): number {
        return this._cep;
    }
    public set cep(value: number) {
        this._cep = value;
    }
    
    public get cidade(): string {
        return this._cidade;
    }
    public set cidade(value: string) {
        this._cidade = value;
    }
    
    public get estado(): string {
        return this._estado;
    }
    public set estado(value: string) {
        this._estado = value;
    }
}