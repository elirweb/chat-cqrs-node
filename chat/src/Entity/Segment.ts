import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { Aggregation } from "./Aggregation";
import { CommercialEstabilishment } from "./CommercialEstabilishment";

@Entity()
export class Segment extends Aggregation {
    @Column()
    Name: string;

    @Column()
    Description: string;


    @OneToOne(() => CommercialEstabilishment)
    @JoinColumn()
    IdCommercial: CommercialEstabilishment;


}
