import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
/**---------------------------------------------------------------------- */
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './login/auth.guard';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AuthHeaderInterceptor } from './auth-header.interceptor';
import { LoaderInterceptor } from './loader/loader.interceptor';

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