import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { BanksComponent } from './banks/banks.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { CreditcardsComponent } from './creditcards/creditcards.component';
import { ApprovalsComponent } from './approvals/approvals.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CustomersComponent } from './customers/customers.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'customers',
    component: CustomersComponent
  },

  {
    path: 'users',
    component: UsersComponent
  },

  {
    path: 'banks',
    component: BanksComponent
  },

  {
    path: 'transactions',
    component: TransactionsComponent
  },

  {
    path: 'creditcards',
    component: CreditcardsComponent
  },

  {
    path: 'approvals',
    component: ApprovalsComponent
  },
  
  {
    path: 'accounts',
    component: AccountsComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
