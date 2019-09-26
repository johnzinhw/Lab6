export class Course {

    private _id: number;
    private _name: string;
    private _workload: number;
    
    constructor(id?:number, name?:string, workload?:number){
        this._id=id;
        this._name=name;
        this._workload=workload;
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
    public get workload(): number {
        return this._workload;
    }
    public set workload(value: number) {
        this._workload = value;
    }
}