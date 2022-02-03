export class PatData {
    private pname: string;
    private email: string;
    private password: string;
    private gender: string;
    private phone: number;
    private address:string;
    private city:string;

    constructor(pname: string, email: string, password: string, gender: string, phone:number, address:string , city: string) {
      this.pname = pname;
      this.email = email;
      this.password = password;
      this.gender = gender;
      this.phone = phone;
      this.address = address;
      this.city = city;
    }
  
    getpname(): string {
      return this.pname;
    }
    getEmail(): string {
      return this.email;
    }
    getPassword(): string {
      return this.password;
    }
    getGender(): string {
      return this.gender;
    }
    getPhone(): number{
      return this.phone;
    }
    getAddress(): string{
      return this.address;
    }
    getCity():string{
      return this.city;
    }
  }
  