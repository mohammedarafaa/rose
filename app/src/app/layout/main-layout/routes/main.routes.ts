import { Routes } from '@angular/router';
export const MainRoutes: Routes = [
    {
      path: "",
      redirectTo: "Home",
      pathMatch:"full"
    },{
    path: 'Home',
    loadComponent: () =>
      import('@pages/home/home.component').then((c) => c.HomeComponent),
    title: 'Home',
  },
  {
    path: 'About',
    loadComponent: () =>
      import('@pages/about/about.component').then((c) => c.AboutComponent),
    title: 'About',
  },
  {
    path: 'All_Category',
    loadComponent: () =>
      import('@pages/all_category/all-category.component').then(
        (c) => c.AllCategoryComponent
      ),
    title: 'Home',
  },
  {
    path: 'Contact',
    loadComponent: () =>
      import('@pages/contact/contact.component').then(
        (c) => c.ContactComponent
      ),
    title: 'Home',
  },
];
