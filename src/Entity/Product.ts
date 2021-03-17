import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { Category } from "./Category";
import { Aggregation } from "./Common/Aggregation";
import { OrderItem } from "./OrderItem";
import Situation from "./Situation";


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

    @OneToOne(() => OrderItem, order => order.product) 
    order: OrderItem;

    @OneToOne(() => Situation, sit => sit.situation)
    @JoinColumn()
    situation: Situation;

    @OneToOne(() => Category, cat => cat.product)
    @JoinColumn()
    category: Category;

}