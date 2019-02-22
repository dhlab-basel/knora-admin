import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

    {
        path: 'users',
        loadChildren: './users-dashboard/users-dashboard.module#UsersDashboardModule'
    },
    {
        path: 'projects',
        loadChildren: './projects-dashboard/projects-dashboard.module#ProjectsDashboardModule'
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }

    /*
    {
        path: '',
        component: MainDashboardModule
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'project/new',
        component: FullframeDialogComponent,
        canActivate: [AuthGuard],
        data: {component: ProjectFormComponent}
    },
    {
        path: 'project/:shortcode',
        component: ProjectComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'board'
            },
            {
                path: 'board',
                component: BoardComponent
            },
            {
                path: 'edit',
                component: ProjectFormComponent
            },
            {
                path: 'collaboration',
                component: CollaborationComponent
            },
            {
                path: 'ontologies',
                component: OntologyListComponent
            },
            {
                path: 'ontology/:id',
                component: OntologyComponent,
            },
            {
                path: '**',
                component: ErrorComponent,
                data: {status: 404}
            }
        ]
    },
    {
        path: 'user/new',
        component: FullframeDialogComponent,
        canActivate: [AuthGuard],
        data: {component: UserFormComponent}
    },
    {
        path: 'user/:name',
        component: ProfileComponent,
    },
    {
        path: 'user/:name/edit',
        component: FullframeDialogComponent,
        canActivate: [AuthGuard],
        data: {component: UserFormComponent}
    },
    {
        path: 'profile',
        component: UserComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'account',
        component: UserComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'projects',
        component: UserComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'collections',
        component: UserComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        component: ErrorComponent,
        data: {status: 404}
    }
    */
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
