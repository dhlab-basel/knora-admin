import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersDashboardRoutingModule } from './users-dashboard-routing.module';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
  imports: [
    CommonModule,
    UsersDashboardRoutingModule
  ],
  declarations: [UsersListComponent]
})
export class UsersDashboardModule { }
