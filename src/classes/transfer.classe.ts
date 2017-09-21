export class Transfer {
    public date:string;
    public desc:string;
    public sum:number;
    public cath:string;
    public id:number;
    constructor (date, desc, sum, cath, id=-1) {
        this.date = date;
        this.desc = desc;
        this.sum = sum;
        this.cath = cath;
        this.id = id;
    }
}