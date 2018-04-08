import {Routes} from '@angular/router';

export const appRoutes: Routes = [
    {
        path: 'index',
        loadChildren: './index/index.module#IndexModule'
    },
    {
        path: 'product',
        loadChildren: './product/product.module#ProductModule'
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'index'
    }
];
