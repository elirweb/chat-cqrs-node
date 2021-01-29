import {Column, Entity} from "typeorm";
import { Aggregation } from "./Aggregation";

@Entity()
export class RequestOrdem extends Aggregation {
    @Column()
Amount: number;

@Column()
Invoice: string;

@Column()
Comment: string;

}
