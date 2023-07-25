import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddComponent } from '../components/add/add.component';
import { Expense } from '../modal/expense';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public modalController: ModalController) {}

  createExpenseInstance() {
    const expense = new Expense(40, 'test', 'Our First Instanse', new Date());
    console.log(expense);
  }

  async presentAddComponent() {
    const modal = await this.modalController.create({
      component: AddComponent,
      componentProps: { value: 123 },
    });
    return await modal.present();
  }
}
