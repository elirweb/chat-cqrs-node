import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { Aggregation } from "./Common/Aggregation";
import { Product } from "./Product";
import { RequestOrdem } from "./RequestOrdem";

@Entity()
export class OrderItem extends Aggregation {
    @Column()
    Quantity: number;

    @Column()
    Price: number;

    @Column()
    Invoice: string;

    @OneToOne(() => Product)
    @JoinColumn()
    IdProduct: Product;

    @OneToOne(() => RequestOrdem)
    @JoinColumn()
    IdRequest: RequestOrdem;

}
