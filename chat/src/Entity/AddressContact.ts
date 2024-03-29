import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { CommercialEstabilishment } from "./CommercialEstabilishment";

import { Aggregation } from "./Common/Aggregation";
import User from "./User";


@Entity()
export class AddressContact extends Aggregation{
  
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

 
   @OneToOne(() => User, iduser => iduser.contact) 
   @JoinColumn()
   user: User;

   @OneToOne(() => CommercialEstabilishment, commercial => commercial.contact) 
   @JoinColumn()
   commercial: CommercialEstabilishment;

}

