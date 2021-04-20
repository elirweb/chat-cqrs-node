export class AddressContact {
    private Neighborhood:string;
    private ZipCode:string;
    private Telephone:string;
    private Cellphone:string;
    private Number:number;
    private State:string;
    private Address:string;
 
    constructor(neight:string, zipcode:string, telephone:string, cellphone:string, number:number, state:string, address:string) {
        this.Neighborhood = neight;
        this.ZipCode = zipcode;
        this.Telephone = telephone;
        this.Cellphone = cellphone;
        this.Number = number;
        this.State = state;
        this.Address = address;
    }
 
 }