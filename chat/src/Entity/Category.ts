import {Column, Entity} from "typeorm";
import { Aggregation } from "./Aggregation";

@Entity()
export class Category extends Aggregation {
    
    @Column()
    Name: string;
}
