import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { Aggregation } from "./Common/Aggregation";
import { Product } from "./Product";
import { Order } from "./Order";

@Entity()
export class OrderItem extends Aggregation {
    @Column()
    Quantity: number;

    @Column()
    Price: number;

    @Column()
    Invoice: string;

    @OneToOne(() => Product, idproduct => idproduct.order)
    @JoinColumn()
    product: Product;

    @OneToOne(() => Order, order => order.item)
    @JoinColumn()
    order: Order;

}