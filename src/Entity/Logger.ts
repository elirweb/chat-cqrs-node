import { Column, CreateDateColumn, Entity } from "typeorm";
import { Aggregation } from "./Common/Aggregation";

@Entity()
export class Logger extends Aggregation {

    @CreateDateColumn({name: 'logger_date'})
    DateLogger: Date;

    @Column()
    Msg: string;

    @Column()
    Method: string;

    @Column()
    Json: string;

    @Column()
    Controller: string;

    @Column()
    Type: string;

}