import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Situation {
    
    @PrimaryGeneratedColumn("uuid")
    id:string;

    @Column()
    Name:string;

   

}
