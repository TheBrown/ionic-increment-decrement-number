import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  qty: any;

  constructor(public navCtrl: NavController) {
    this.qty = 1;
  }

  incrementQty() {
    this.qty += 1;
  }

  decrementQty() {
    if (this.qty - 1 < 1) {
      this.qty = 1;
    } else {

    this.qty -= 1;
    }
  }
}
