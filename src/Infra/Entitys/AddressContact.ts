import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CommercialEstabilishment } from "./CommercialEstabilishment";
import User from "./User";


@Entity()
export class AddressContact {
   @PrimaryGeneratedColumn()
   id:number;
  
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

