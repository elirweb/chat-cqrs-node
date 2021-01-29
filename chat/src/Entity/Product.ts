import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { Aggregation } from "./Aggregation";
import { Category } from "./Category";

@Entity()
export class Product extends Aggregation {
    @Column()
    Name: string;

    @Column()
    Descrition: string;

    @Column()
    Quantity: number;

    @Column()
    Price: number;

    @Column()
    Photo: string;

    @Column()
    Code: string;

    @OneToOne(() => Category)
    @JoinColumn()
    IdCategory: Category;

}
