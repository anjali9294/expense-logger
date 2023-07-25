import { Component, OnInit } from '@angular/core';
import {
  IonInput,
  IonSelect,
  IonTextarea,
  ModalController,
} from '@ionic/angular';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss();
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

  logExpenseInput(amount: IonInput, description: IonTextarea, type: IonSelect) {
    console.log(amount.value, type.value, description.value);
  }
}
