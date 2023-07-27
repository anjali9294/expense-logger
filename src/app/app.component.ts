import { Component } from '@angular/core';
import { ExpenseService } from './services/expense.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private expenseServise: ExpenseService) {
    this.expenseServise.saveExpenseFromStorage().then((res) => {
      this.expenseServise.initTotalUpdate();
    });
  }
}
