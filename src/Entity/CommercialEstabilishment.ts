import { Column, Entity, OneToOne } from "typeorm";
import { AddressContact } from "./AddressContact";
import { Aggregation } from "./Common/Aggregation";
import { Segment } from "./Segment";

@Entity()
export class CommercialEstabilishment extends Aggregation {
    @Column()
    TraddingName: string;

    @Column()
    Document: string;

    @Column()
    Mail: string;

    @Column()
    Mail2: string;

    @Column()
    Photo: string;

    @OneToOne(() => AddressContact, contact => contact.commercial)
    contact: AddressContact;

    @OneToOne(() => Segment, seg => seg.commercial)
    segment: Segment;




}