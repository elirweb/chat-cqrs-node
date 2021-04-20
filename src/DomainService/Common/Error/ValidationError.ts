export class ValidationError{
    Menssage: string;
    DtaError:Date;

    constructor(men: string, dterror: Date) {
      this.Menssage = men;
      this.DtaError = dterror;
        
    }
}