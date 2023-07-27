import { Component, OnInit, Input } from '@angular/core';
import {
  IonInput,
  IonSelect,
  IonTextarea,
  ModalController,
  ToastController,
} from '@ionic/angular';
import { Expense } from 'src/app/modal/expense';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  @Input('date') date: Date = new Date();
  constructor(
    private modalController: ModalController,
    private toastController: ToastController,
    private expenseService: ExpenseService
  ) {}

  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Please Enter correct Amount',
      duration: 1000,
      position: 'top',
      color: 'danger',
    });
    toast.present();
  }

  expenseTypes: any[] = [
    {
      name: 'Groceries',
      description: 'Weekly grocery shopping',
      type: 'Food',
      icon: 'basket',
    },
    {
      name: 'Utilities',
      description: 'Monthly utility bills',
      type: 'Bills',
      icon: 'flash',
    },
    {
      name: 'Transportation',
      description: 'Public transportation expenses',
      type: 'Transport',
      icon: 'bus',
    },
    {
      name: 'Entertainment',
      description: 'Movie tickets and outings',
      type: 'Leisure',
      icon: 'film',
    },
    {
      name: 'Healthcare',
      description: 'Medical check-ups and expenses',
      type: 'Health',
      icon: 'heart',
    },
    {
      name: 'Shopping',
      description: 'Retail therapy',
      type: 'Miscellaneous',
      icon: 'cart',
    },
    {
      name: 'Dining Out',
      description: 'Eating at restaurants and cafes',
      type: 'Food',
      icon: 'restaurant',
    },
    {
      name: 'Rent',
      description: 'Monthly rent payment',
      type: 'Housing',
      icon: 'home',
    },
    {
      name: 'Travel',
      description: 'Vacation expenses',
      type: 'Leisure',
      icon: 'airplane',
    },
    {
      name: 'Gym Membership',
      description: 'Monthly gym subscription',
      type: 'Health',
      icon: 'fitness',
    },
    {
      name: 'Education',
      description: 'Tuition fees and learning materials',
      type: 'Education',
      icon: 'school',
    },
    {
      name: 'Charity',
      description: 'Donations and contributions',
      type: 'Miscellaneous',
      icon: 'heart',
    },
    {
      name: 'Insurance',
      description: 'Monthly insurance premiums',
      type: 'Bills',
      icon: 'shield',
    },
    {
      name: 'Books',
      description: 'Purchasing books and e-books',
      type: 'Education',
      icon: 'book',
    },
    {
      name: 'Gifts',
      description: 'Gifts for special occasions',
      type: 'Miscellaneous',
      icon: 'gift',
    },
    {
      name: 'Hobbies',
      description: 'Expenses related to hobbies',
      type: 'Leisure',
      icon: 'game-controller',
    },
  ];

  addExpense(amount: IonInput, description: IonInput, type: IonSelect) {
    const numberRegex = /^\d+(\.\d{1,2})?$/;

    if (isNaN(Number(amount.value)) || amount.value === '') {
      this.presentToast();
      return;
    }

    const amountValue = Number(amount.value);
    const descriptionValue =
      description.value != null ? description.value.toString() : '';

    const expense = new Expense(
      amountValue,
      type.value,
      descriptionValue,
      this.date
    );
    this.expenseService.addExpense(expense);
    this.dismissModal();
  }
}
