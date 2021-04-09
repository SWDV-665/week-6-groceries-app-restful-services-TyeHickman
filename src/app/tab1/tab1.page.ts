import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
// import { AlertController } from '@ionic/angular';
import { GroceriesService } from '../groceries.service';
import { InputDialogService } from '../input-dialog.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

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
              public inputDialogService: InputDialogService,
              public socialSharing: SocialSharing) {


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

  async shareItem(item, index) {
    console.log("Sharing Item... ", item, index);
    const toast = await this.toastController.create({
      // position: 'top',
      message: 'Sharing Item - ' + index + '...',
      duration: 3000
    });

    toast.present();

    let message = "Grocery Item - Name : " + item.name + " - Quantity: " + item.quantity;
    let subject = "Shared via Groceries app";

    this.socialSharing.share(message, subject).then(() => {
      
    }).catch(() => {
      // Sharing via email is not possible
    });

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
