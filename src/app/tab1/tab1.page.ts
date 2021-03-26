import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  title = "Grocery";

  items = [
    {
      name: "Milk",
      quantity: 2
    },
    {
      name: "Cherries",
      quantity: 10
    },
    {
      name: "Yogurt",
      quantity: 3
    },
    {
      name: "Spinach",
      quantity: 2
    }
  ];
  constructor(public toastController: ToastController) {}

  async removeItem(item) {
    console.log("Removing Item... ", item);
    const toast = await this.toastController.create({
      // position: 'top',
      message: 'Removing Item - ' + item.name + '...',
      duration: 3000
    });
    toast.present();
  }

}
