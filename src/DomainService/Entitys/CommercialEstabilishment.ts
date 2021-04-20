import { AddressContact } from "chat/dist/Entity/AddressContact";
import { Situation } from "chat/dist/Entity/Situation";
import { Aggregation } from "./Common/Aggregation";
import { Segment } from "./Segment";

export class CommercialEstabilishment extends Aggregation {
    private TraddingName: string;
    private Document: string;
    private Mail: string;
    private Mail2: string;
    private Photo: string;
    private Segment: Segment;
    private AddressContact: AddressContact;
    private Situation:Situation;

   
    constructor(tradding: string, document:string, mail:string, mail2:string, photo:string, segment:Segment, contact:AddressContact, situation:Situation, created:Date, modify:Date, hours:string, status:number ) {
        super();
        this.TraddingName = tradding;
        this.Document = document;
        this.Mail = mail;
        this.Mail2 = mail2;
        this.Photo = photo;
        this.Segment = segment;
        this.AddressContact = contact;
        this.Situation = situation;
        this.CreateDate = created;
        this.ModifyDate = modify;
        this.Hours = hours;
        this.Status = status;
    }
}