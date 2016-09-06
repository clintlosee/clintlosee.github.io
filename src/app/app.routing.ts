import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';

const appRoutes: Routes = [
    { path: '', component: MainComponent },
    { path: 'main', component: MainComponent }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });