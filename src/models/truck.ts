export class Truck {
  id: number;
  brand: string;
  model: string;
  average_speed: number;
  maximum_wight: number;
  engine_id: number;
  tire_id: number;
  truck_break_id: number;
  gear_id: number;
  suspension_id: number;
  kilometers: number;
  fuel: number;
  price: number;

  constructor(obj: any) {
    this.id = obj.id;
    this.brand = obj.brand;
    this.model = obj.model;
    this.average_speed = obj.average_speed;
    this.maximum_wight = obj.maximum_wight;
    this.engine_id = obj.engine_id;
    this.tire_id = obj.tire_id;
    this.truck_break_id = obj.truck_break_id;
    this.gear_id = obj.gear_id;
    this.suspension_id = obj.suspension_id;
    this.kilometers = obj.kilometers;
    this.fuel = obj.fuel;
    this.price = obj.price;
  }

}


export class Engine {
  id: number;
  power: number;
  attrition: number;
  breaking: number;
  repair: number;
  price: number;

  constructor(obj: any) {
    this.id = obj.id;
    this.power = obj.power;
    this.attrition = obj.attrition;
    this.breaking = obj.breaking;
    this.repair = obj.repair;
    this.price = obj.price;
  }
}


export class Tire {
  id: number;
  power: number;
  attrition: number;
  breaking: number;
  repair: number;
  price: number;

  constructor(obj: any) {
    this.id = obj.id;
    this.power = obj.power;
    this.attrition = obj.attrition;
    this.breaking = obj.breaking;
    this.repair = obj.repair;
    this.price = obj.price;
  }

}

export class TruckBreak {
  id: number;
  stability: number;
  attrition: number;
  breaking: number;
  repair: number;
  price: number;

  constructor(obj: any) {
    this.id = obj.id;
    this.stability = obj.stability;
    this.attrition = obj.attrition;
    this.breaking = obj.breaking;
    this.repair = obj.repair;
    this.price = obj.price;
  }


}

export class Gear {
  id: number;
  stability: number;
  attrition: number;
  breaking: number;
  repair: number;
  price: number;

  constructor(obj: any) {
    this.id = obj.id;
    this.stability = obj.stability;
    this.attrition = obj.attrition;
    this.breaking = obj.breaking;
    this.repair = obj.repair;
    this.price = obj.price;
  }

}

export class Suspension {
  id: number;
  stability: number;
  attrition: number;
  breaking: number;
  repair: number;
  price: number;

  constructor(obj: any) {
    this.id = obj.id;
    this.stability = obj.stability;
    this.attrition = obj.attrition;
    this.breaking = obj.breaking;
    this.repair = obj.repair;
    this.price = obj.price;
  }

}