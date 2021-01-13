import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { CommercialEstabilishment } from "./CommercialEstabilishment";
import { Aggregation } from "./Common/Aggregation";
import { Situation } from "./Situation";

@Entity()
export class Segment extends Aggregation{
@Column()
Name: string;

@Column()
Description:string;


@OneToOne(() => CommercialEstabilishment)
@JoinColumn()
IdCommercial: CommercialEstabilishment;

}