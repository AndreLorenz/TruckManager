import { Injectable } from '@angular/core';
import { DBManager } from './db-manager';
import { Truck } from '../models/truck';
import 'rxjs/add/operator/map';

@Injectable()
export class TruckService {
  db: any;

  constructor(public dbManager: DBManager) {
    this.dbManager = dbManager;
    this.createTable();
  }

  createTable() {
    let syntax = "";
    syntax = syntax + "CREATE TABLE IF NOT EXISTS TRUCK("
    syntax = syntax + "id INTEGER PRIMARY KEY   AUTOINCREMENT, "
    syntax = syntax + "brand TEXT, "
    syntax = syntax + "model TEXT, "
    syntax = syntax + "average_speed INTEGER, "
    syntax = syntax + "maximum_wight INTEGER, "
    syntax = syntax + "engine_id INTEGER, "
    syntax = syntax + "tire_id INTEGER, "
    syntax = syntax + "truck_break_id INTEGER, "
    syntax = syntax + "gear_id INTEGER, "
    syntax = syntax + "suspension_id INTEGER, "
    syntax = syntax + "kilometers INTEGER, "
    syntax = syntax + "fuel INTEGER, "
    syntax = syntax + "price INTEGER);"
    return this.dbManager.executeSql(syntax);
  }

  getAll() {
    const syntax = "SELECT * FROM TRUCK;";
    return this.dbManager.executeQuery<Truck>(syntax);

  }

  insert(truck: Truck) {
    const syntax = "INSERT INTO TRUCK VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?);";
    return this.dbManager.executeSql(syntax, [truck.id, truck.brand,
    truck.model,
    truck.average_speed,
    truck.maximum_wight,
    truck.engine_id,
    truck.tire_id,
    truck.truck_break_id,
    truck.gear_id,
    truck.suspension_id,
    truck.kilometers,
    truck.fuel,
    truck.price]);
  }

}

