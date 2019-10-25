export class Posts {
    id: number;
    title: string;
    autor: string;

    constructor(id?:number, title?:string, autor?:string){
        this.id = id;
        this.title = title;
        this.autor = autor;
    }

    public getid(): number {
        return this.id;
    }
    public setid(value: number) {
        this.id = value;
    }
    public gettitle(): string {
        return this.title;
    }
    public settitle(value: string) {
        this.title = value;
    }
    public getauthor(): string {
        return this.autor;
    }
    public setauthor(value: string) {
        this.autor = value;
    }
}