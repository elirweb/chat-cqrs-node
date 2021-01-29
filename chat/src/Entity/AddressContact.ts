import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import { CommercialEstabilishment } from "./CommercialEstabilishment";
import { User } from "./User";

@Entity()
export class AddressContact   {

    @PrimaryGeneratedColumn("uuid")
    id:string;
    
    @Column()
   Neighborhood:string;

   @Column()
   ZipCode:string;

   @Column()
   Telephone:string;

   @Column()
   Cellphone:string;

   @Column()
   Number:number;

   @Column()
   State:string;

   @Column()
   Address:string;

   @OneToOne(() => User)
    @JoinColumn()
    IdUser?: User;

    @OneToOne(() => CommercialEstabilishment)
    @JoinColumn()
    IdCommercial?: CommercialEstabilishment;



}
