import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { AddressContact } from "./AddressContact";
import { Aggregation } from "./Common/Aggregation";
import Gender from "./Gender";
import { Profile } from "./Profile";
import Situation from "./Situation";


@Entity()
export default class User extends Aggregation {
  @Column()
  Name: string;

  @Column()
  Login: string;

  @Column()
  Password: string;

  @Column()
  Document: string;

  @Column()
  Photo: string;

  @Column()
  Mail: string;

  @Column()
  Mail2: string;

  @OneToOne(() => Profile, idprofile => idprofile.user)
  @JoinColumn()
  profile: Profile;

  @OneToOne(() => Gender, idgender => idgender.user)
  @JoinColumn()
  gender: Gender;

  @OneToOne(() => Situation, idsituation => idsituation.user)
  @JoinColumn()
  situation: Situation;

  @OneToOne(() => AddressContact, contact => contact.user)
  contact: AddressContact;

}
