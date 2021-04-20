import { Category } from "./Category";
import { Aggregation } from "./Common/Aggregation";
import Situation from "./Situation";

export class Product extends Aggregation {
    private Name: string;
    private Description: string;
    private Quantity: number;
    private Price: number;
    private Photo: string;
    private Code: string;
    private Situation: Situation;
    private Category:Category; 


  
   constructor(name:string, description:string, quantity:number,price:number, photo:string, code:string, situation:Situation, created:Date,hours:string, modify:Date,status:number,category:Category ) {
       super();
    this.Name = name;
    this.Description = description;
    this.Quantity = quantity;
    this.Price = price;
    this.Photo = photo;
    this.Code = code;
    this.Situation = situation;
    this.CreateDate = created;
    this.ModifyDate = modify;
    this.Hours = hours;
    this.Status = status;
    this.Category = category;

   }
   
}