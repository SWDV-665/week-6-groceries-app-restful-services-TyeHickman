import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GroceriesService } from './groceries.service';

@Injectable({
  providedIn: 'root'
})
export class InputDialogService {

  constructor(public alertController: AlertController,
              public dataService: GroceriesService) { 
    console.log("Input Dialog Service");
  }


  async showPrompt(item?, index?) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: item ? 'Edit Item' : 'Add Item',
      // message: item ? "Please edit item..." : "Please add item...",
      message: "Please " + (item ? "edit" : "add") + " item...",
      inputs: [
        {
          name: 'name',
          type: 'text',
          value: item ? item.name : null
        },
        {
          name: 'quantity',
          type: 'number',
          value: item ? item.quantity : null
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
          // handler: (item) => {
          //   console.log('Confirm Ok', item);
          //   if (index !== undefined){
          //     this.dataService.editItem(item, index);
          //   }
          //   else {
          //     this.dataService.addItem(item);
          //   }
          handler: data => {
            console.log('Saving data... ' + data);
            if (index !== undefined) {
              item.name = data.name;
              item.quantity = data.quantity;
              this.dataService.editItem(item,index);
            }
            else {
              this.dataService.addItem(data);
            }
          }
        }
      ]
    });

    await alert.present();
  }

}
