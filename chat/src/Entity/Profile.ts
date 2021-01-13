import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Aggregation } from "./Common/Aggregation";

@Entity()
export class Profile extends Aggregation{

    @Column()
    Name: string;

    @Column()
    Description: string;


}