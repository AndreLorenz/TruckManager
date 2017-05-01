export class Company {
  id: number;
  name: string;
  city: string;
  level: number;
  money: number;
  logo: string;

  constructor(obj: any) {
    this.id = obj.id;
    this.name = obj.name;
    this.city = obj.city;
    this.level = obj.level;
    this.money = obj.money;
    this.logo = obj.logo;
  }

}

