import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
// import { AlertController } from '@ionic/angular';
import { GroceriesService } from '../groceries.service';
import { InputDialogService } from '../input-dialog.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  title = "Grocery";

  
  constructor(public toastController: ToastController,
              // public alertController: AlertController,
              public dataService: GroceriesService,
              public inputDialogService: InputDialogService) {


  }

  loadItems() {
    return this.dataService.getItems();
  }

  async removeItem(item, index) {
    console.log("Removing Item... ", item, index);
    const toast = await this.toastController.create({
      // position: 'top',
      message: 'Removing Item - ' + index + '...',
      duration: 3000
    });
    toast.present();

    this.dataService.removeItem(index);
  }

  async editItem(item, index) {
    console.log("Edit Item... ", item, index);
    const toast = await this.toastController.create({
      // position: 'top',
      message: 'Editing Item - ' + index + '...',
      duration: 3000
    });
    toast.present();

    this.inputDialogService.showPrompt(item, index)
  }

  addItem() {
    console.log("Adding Item...");
    this.inputDialogService.showPrompt();
  }

  

}
