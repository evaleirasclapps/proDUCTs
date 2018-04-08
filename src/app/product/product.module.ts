import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {ProductRouting} from './product.routing';
import {EditComponent} from './edit/edit.component';
import {CreateComponent} from './create/create.component';
import {ShareModule} from '../share/share.module';


@NgModule({
    declarations: [
        CreateComponent,
        EditComponent
    ],
    imports: [
        ShareModule,
        RouterModule.forChild(ProductRouting)
    ]
})
export class ProductModule {
}
