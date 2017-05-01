import { Component } from '@angular/core';
import { Truck } from '../../models/truck';
import { TruckService } from '../../providers/truck-service';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  trucks: Truck[];
  teste: string;


  constructor(public navCtrl: NavController, public truckService: TruckService) {
    this.truckService = truckService;
    this.teste = "Meus caminhões"
    this.loadTrucks();
  }

  loadTrucks() {
    let truck: Truck = {
      id: null,
      brand: "Scania",
      model: "FX4000",
      average_speed: 126,
      maximum_wight: 12,
      engine_id: 1,
      tire_id: 1,
      truck_break_id: 1,
      gear_id: 1,
      suspension_id: 1,
      kilometers: 1254,
      fuel: 100,
      price: 13335,
    };

    return this.truckService.insert(truck).then(() => this.truckService.getAll().then((trucks: Truck[]) => this.trucks = trucks));
  }

  doClick(db, handler, event, a) {
    console.log(db, handler, event, a);
  }

}
