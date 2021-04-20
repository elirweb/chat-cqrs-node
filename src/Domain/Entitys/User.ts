import { AddressContact } from "./AddressContact";
import { Aggregation } from "./Common/Aggregation";
import { Gender } from "./Gender";
import { Profile } from "./Profile";
import Situation from "./Situation";

export  class User extends Aggregation {
    private Name: string;
    private Login: string;
    private Password: string;
    private Document: string;
    private Photo: string;
    private Mail: string;
    private Mail2: string;
    private Profile: Profile;
    private Gender: Gender;
    private Situation: Situation;
    private AddressContact: AddressContact; 
   

  constructor(name:string, login:string,password:string,document:string, photo:string, mail:string, mail2:string,profile:Profile,gender:Gender, situation:Situation, created:Date, modify:Date, hours: string, status: number, contact: AddressContact){
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