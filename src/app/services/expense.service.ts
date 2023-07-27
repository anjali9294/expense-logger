import { Injectable } from '@angular/core';
import { ExpenseInterface } from '../modal/expense';
import { BehaviorSubject } from 'rxjs';
import { Preferences } from '@capacitor/preferences';
@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  todayTotal: number = 0;
  selectDate: Date;
  expenses: ExpenseInterface[] = [];
  expenseObservable: BehaviorSubject<ExpenseInterface[]>;
  todayTotalObservable: BehaviorSubject<number>;
  constructor() {
    this.selectDate = new Date();
    this.expenseObservable = new BehaviorSubject(this.expenses);
    this.expenseObservable.asObservable();
    this.todayTotalObservable = new BehaviorSubject(this.todayTotal);
    this.todayTotalObservable.asObservable();
  }
  addExpense(expense: ExpenseInterface) {
    this.expenses.unshift(expense);
    this.addTotal(expense.amount);
    this.saveExpenseToStorage(expense.date).then((sucess) => {
      this.expenseObservable.next(this.expenses);
    });
  }
  addTotal(value: number): void {
    this.todayTotal += value;
    this.todayTotalObservable.next(this.todayTotal);
  }

  async saveExpenseToStorage(date: Date) {
    console.log(date.toDateString());
    await Preferences.set({
      key: date.toDateString(),
      value: JSON.stringify(this.expenses),
    });
  }
  async saveExpenseFromStorage() {
    await Preferences.get({ key: this.getCurrentDate() }).then((value) => {
      this.expenses = [];
      const objects: ExpenseInterface[] = JSON.parse(String(value.value));
      if (objects !== null) {
        this.expenses = objects;
      } else {
        this.expenses = [];
      }
      this.expenseObservable.next(this.expenses);
    });
  }
  getCurrentDate() {
    return new Date().toDateString();
  }
  resetApp() {}
  getSpecificDate(date?: Date) {
    const newDate = new Date(date || new Date());
    return newDate;
  }
  initTotalUpdate() {
    let totalAmount: number = 0;
    this.expenses.forEach((element) => {
      totalAmount += element.amount;
    });
    this.todayTotal = Math.round(totalAmount);
    this.todayTotalObservable.next(this.todayTotal);
  }
}
