import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
/**---------------------------------------------------------------------- */
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './login/auth.guard';
import { PageNotFoundComponent } from './page-not-found.component';
import { AuthHeaderInterceptor } from './auth-header.interceptor';
import { LoaderInterceptor } from './loader/loader.interceptor';
import { EmployeeListContainerComponent } from './employee-mvp/employee-list-container/employee-list-container.component';
import { EmployeeEditContainerComponent } from './employee-mvp/employee-edit-container/employee-edit-container.component';
import { EmployeeDetailContainerComponent } from './employee-mvp/employee-detail-container/employee-detail-container.component';

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'emp',
        canActivate: [AuthGuard],
        loadChildren: './employee/employee.module#EmployeeModule'
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'emp-mvp',
        component: EmployeeListContainerComponent
    },
    {
      path:'emp-mvp/:id/edit',
      component: EmployeeEditContainerComponent
    },
    {
        path:'emp-mvp/:id/detail',
        component: EmployeeDetailContainerComponent
      },
    {
        path: '**',
        component: PageNotFoundComponent
    }
]
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        { 
            provide: HTTP_INTERCEPTORS, 
            useClass: AuthHeaderInterceptor, 
            multi: true 
          },
          {
            provide: HTTP_INTERCEPTORS,
            useClass: LoaderInterceptor,
            multi: true
          }
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}