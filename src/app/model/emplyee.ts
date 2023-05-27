export class Emplyee {
    name : string = "" ;
    position : string = "" ;
    salary : number = 0 ;
    barithOfDate : Date = new Date()   ;

    constructor(name:string ,position:string,salary: number,barithOfDate: Date,  ){
        this.name = name ;
        this.salary = salary ;
        this.position = position ;
        this.barithOfDate = barithOfDate ;
    }
}
