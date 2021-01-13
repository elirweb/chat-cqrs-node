import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Aggregation } from "./Common/Aggregation";

@Entity()
export class Sex extends Aggregation{
    @Column()
    Name: string;

}