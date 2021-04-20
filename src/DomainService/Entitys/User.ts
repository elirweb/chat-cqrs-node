import { Email } from "../ObjectValue/Email";
import { Password } from "../ObjectValue/Password";
import { AddressContact } from "./AddressContact";
import { Aggregation } from "./Common/Aggregation";
import { Gender } from "./Gender";
import { Profile } from "./Profile";
import Situation from "./Situation";

export  class User extends Aggregation {
    private Name: string;
    private Login: string;
    private Password: Password;
    private Document: Document;
    private Photo: string;
    private Mail: Email;
    private Mail2: Email;
    private Profile: Profile;
    private Gender: Gender;
    private Situation: Situation;
    private AddressContact: AddressContact; 
   

  constructor(name:string, login:string,password:Password,document:Document, photo:string, mail:Email, mail2:Email,profile:Profile,gender:Gender, situation:Situation, created:Date, modify:Date, hours: string, status: number, contact: AddressContact){
      super();
      this.Name = name;
      this.Login = login;
      this.Password = password;
      this.Document = document
      this.Photo = photo;
      this.Mail = mail;
      this.Mail2 = mail2;
      this.Profile = profile;
      this.Gender = gender;
      this.Situation = situation;
      this.CreateDate = created;
      this.ModifyDate = modify;
      this.Hours = hours;
      this.Status = status;
      this.AddressContact = contact;
   }
}