import { EIDRM } from "constants";
import { Column, Entity } from "typeorm";
import { Aggregation } from "./Common/Aggregation";

@Entity()
export class Category extends Aggregation {
@Column()
Name: string;


}