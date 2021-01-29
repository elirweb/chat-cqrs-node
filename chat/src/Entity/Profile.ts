import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import { Aggregation } from "./Aggregation";

@Entity()
export class Profile  {
    
    @PrimaryGeneratedColumn("uuid")
    id:string;

    @Column()
    Name: string;

    @Column()
    Description: string;

}
