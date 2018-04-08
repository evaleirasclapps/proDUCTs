import {CreateComponent} from './create/create.component';
import {EditComponent} from './edit/edit.component';

export const ProductRouting = [
    { path: 'create',
        component: CreateComponent
    },
    {
        path: 'edit/:id',
        component: EditComponent
    }
];
