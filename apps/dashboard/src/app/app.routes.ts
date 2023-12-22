import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'todolist',
    loadChildren: () => import('todolist/Routes').then((m) => m.remoteRoutes),
  },
  // {
  //   path: '',
  //   component: AppComponent,
  // },
];
