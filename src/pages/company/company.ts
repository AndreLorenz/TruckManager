import { Component } from "@angular/core";
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

@Component({
  selector: "company-home",
  templateUrl: "company.html"
})
export class CompanySlider {
  @ViewChild(Slides) slides: Slides;
  searchQuery: string = "";
  items: any[];

  constructor() {
    this.initializeItems();
  }

  ngAfterViewInit() {
    this.slides.lockSwipes(true);
  }

  next() {
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }

  back() {
    this.slides.lockSwipes(false);
    this.slides.slidePrev();
    this.slides.lockSwipes(true);
  }

  initializeItems() {
    this.items = [];
  }

  getCities(ev: any) {
    switch (ev) {
      case "BRA":
        this.items = [
          { id: 1, name: "Florianópolis" },
          { id: 2, name: "Blumenau" },
          { id: 3, name: "Porto Alegre" }
        ];
        break;
      case "EUR":
        this.items = [
          { id: 4, name: "Paris" },
          { id: 5, name: "Munique" },
          { id: 6, name: "Barcelona" }
        ];
        break;
      case "EUA":
        this.items = [
          { id: 7, name: "Nova Iorque" },
          { id: 8, name: "Texas" },
          { id: 9, name: "Vancouver" }
        ];
        break;
    }
  }
}
