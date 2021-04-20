import { Aggregation } from "./Common/Aggregation";


export class Category extends Aggregation{
    private Name: string;
  
    constructor(name:string, created:Date, modify:Date,hours:string, status:number) {
        super();
        this.Name = name;
        this.CreateDate = created;
        this.ModifyDate = modify;
        this.Hours = hours;
        this.Status = status;
        
    }
}