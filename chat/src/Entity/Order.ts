import { Column, Entity, OneToOne } from "typeorm";
import { Aggregation } from "./Common/Aggregation";
import { OrderItem } from "./OrderItem";

@Entity()
export class Order extends Aggregation{
    
@Column()
Amount: number;

@Column()
Invoice: string;

@Column()
Comment: string;

@OneToOne(() => OrderItem, item => item.order) 
item: OrderItem;

}