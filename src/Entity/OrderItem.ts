import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { Aggregation } from "./Common/Aggregation";
import { Product } from "./Product";
import { Request } from "./Request";

@Entity()
export class OrderItem extends Aggregation {
@Column()
Quantity:number;

@Column()
Price:number;

@Column()
Invoice:string;

@OneToOne(() => Product)
@JoinColumn()
IdProduct: Product;

@OneToOne(() => Request)
@JoinColumn()
IdRequest: Request;

}