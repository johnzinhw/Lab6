export class Teacher {

    private _id: number;
    private _course: string;
    private _subject: string;
    private _name: string;
    private _year: number;
    private _semester: number;

    constructor(id?: number, course?: string, subject?: string, name?:string, 
        year?: number, semester?: number){

        this._id=id;
        this._course=course;
        this.subject=subject;
        this._name=name;
        this.year=year;
        this.semester=semester;
    }

    public get id(): number {
        return this._id;
    }
    public set id(id: number) {
        this._id = id;
    }

    public get course(): string {
        return this._course;
    }
    public set course(value: string) {
        this._course = value;
    }

    public get subject(): string {
        return this._subject;
    }
    public set subject(value: string) {
        this._subject = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get year(): number {
        return this._year;
    }
    public set year(value: number) {
        this._year = value;
    }
    public get semester(): number {
        return this._semester;
    }
    public set semester(value: number) {
        this._semester = value;
    }





}