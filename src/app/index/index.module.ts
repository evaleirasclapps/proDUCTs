import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {IndexRouting} from './index.routing';
import {IndexComponent} from './index.component';
import {ShareModule} from '../share/share.module';

@NgModule({
    declarations: [
        IndexComponent
    ],
    imports: [
        ShareModule,
        RouterModule.forChild(IndexRouting)
    ]
})
export class IndexModule {
}
