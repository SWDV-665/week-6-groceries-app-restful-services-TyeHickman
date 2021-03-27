import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


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
  constructor(public toastController: ToastController, public alertController: AlertController) {}

  async removeItem(item, index) {
    console.log("Removing Item... ", item, index);
    const toast = await this.toastController.create({
      // position: 'top',
      message: 'Removing Item - ' + index + '...',
      duration: 3000
    });
    toast.present();

    this.items.splice(index, 1);
  }

  addItem() {
    console.log("Addding Item...");
    this.showAddItemPrompt();
  }

  async showAddItemPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Add Item',
      message: "Please enter item...",
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Item Name'
        },
        {
          name: 'quantity',
          type: 'number',
          placeholder: '1'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'primary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Save',
          handler: (item) => {
            console.log('Confirm Ok', item);
            this.items.push(item)
          }
        }
      ]
    });

    await alert.present();
  }

}
