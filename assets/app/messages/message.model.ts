export class Skill{
    _id: any;
    name: string;
    acceptoption: boolean;
    rejectoption: boolean;

    constructor(id:any, name:string, acceptoption:boolean, rejectoption: boolean){
        this._id = id;
        this.name = name;
        this.acceptoption = acceptoption;
        this.rejectoption = rejectoption;
    }
}