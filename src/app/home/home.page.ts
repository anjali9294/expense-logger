import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddComponent } from '../components/add/add.component';
import { Expense, ExpenseInterface } from '../modal/expense';
import { ExpenseService } from '../services/expense.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  selectedDate: Date = new Date(); // Initialize selectedDate with a default value
  expenses: ExpenseInterface[] = []; // Initialize expenses as an empty array
  todaysTotal: number = 0; // Initialize todaysTotal to 0
  constructor(
    public modalController: ModalController,
    private expenceService: ExpenseService
  ) {
    this.expenceService.expenseObservable.subscribe((expense) => {
      this.expenses = expense;
    });
    this.expenceService.todayTotalObservable.subscribe((value) => {
      this.todaysTotal = value;
    });
  }

  createExpenseInstance() {
    const expense = new Expense(40, 'test', 'Our First Instanse', new Date());
    console.log(expense);
  }

  async presentAddComponent() {
    const modal = await this.modalController.create({
      component: AddComponent,
      componentProps: {
        date: this.expenceService.getSpecificDate(this.selectedDate),
      },
    });
    return await modal.present();
  }
}
