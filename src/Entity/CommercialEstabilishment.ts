import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { Aggregation } from "./Common/Aggregation";

import { User } from "./User";

@Entity()
export class CommercialEstabilishment extends Aggregation{
@Column()
TraddingName:string;

@Column()
Document:string;

@Column()
Mail:string;

@Column()
Mail2:string;

@Column()
Photo:string;

@OneToOne(() => User)
@JoinColumn()
IdUser: User;



}