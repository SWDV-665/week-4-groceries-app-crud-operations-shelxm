import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';
import {ToastController} from '@ionic/angular';
import {AlertController} from '@ionic/angular';
import { GroceriesServiceService } from '../groceries-service.service';
import { InputDialogServiceService } from '../input-dialog-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title='Grocery List';
  
  constructor(public navController: NavController, public toastController: ToastController, public alertController: AlertController, public dataService: GroceriesServiceService, public inputDialogService: InputDialogServiceService ) {}

  loadItems() {
    return this.dataService.getItems();
  }

  async removeItem(item, index) {
    console.log('Removing Item-', item, index);
    const toast= await this.toastController.create({
      message: 'Removing Item: ' + item.name + ' ...',
      duration: 3000
    });
    toast.present();

    this.dataService.removeItem(index);
  }

  async editItem(item, index) {
    console.log('Edited Item-', item, index);
    const toast= await this.toastController.create({
      message: 'Editing Item: ' + item.name + ' ...',
      duration: 3000
    });
    toast.present();
    this.inputDialogService.showPrompt(item, index);
  }

  async addItem() {
    console.log('Adding Item');
    this.inputDialogService.showPrompt();
  }
}
