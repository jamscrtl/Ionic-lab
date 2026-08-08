import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then(m => m.TabsPage),
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadComponent: () => import('./home/home.page').then(m => m.HomePage) },
      { path: 'lists', loadComponent: () => import('./lists/lists.page').then(m => m.ListsPage) },
      { path: 'forms', loadComponent: () => import('./forms/forms.page').then(m => m.FormsPage) },
      { path: 'cards', loadComponent: () => import('./cards/cards.page').then(m => m.CardsPage) },
      { path: 'settings', loadComponent: () => import('./settings/settings.page').then(m => m.SettingsPage) },
    ]
  },
  {
    path: 'accordion',
    loadComponent: () => import('./accordion/accordion.page').then(m => m.AccordionPage)
  },
  {
    path: 'buttons',
    loadComponent: () => import('./buttons/buttons.page').then(m => m.ButtonsPage)
  },
];
      
