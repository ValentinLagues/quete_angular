export class User{
   
    name:string;
    firstName : string;
    age : number;
    quote: string;
    photo : string;
   
    constructor(name:string, fisrtName:string, age:number, quote:string, photo:string){
        this.name = name;
        this.firstName = fisrtName;
        this.age = age;
        this.quote = quote;
        this.photo = photo;
    }
}