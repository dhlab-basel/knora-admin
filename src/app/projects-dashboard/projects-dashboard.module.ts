import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsDashboardRoutingModule } from './projects-dashboard-routing.module';
import { ProjectsListComponent } from './projects-list/projects-list.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectsDashboardRoutingModule
  ],
  declarations: [ProjectsListComponent]
})
export class ProjectsDashboardModule { }
