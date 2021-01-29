import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Sex  {

    @PrimaryGeneratedColumn("uuid")
    id:string;
    
    @Column()
    Name: string;

}
