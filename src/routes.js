import React from 'react';

const Toaster = React.lazy(() => import('./views/notifications/toaster'));
const Tables = React.lazy(() => import('./views/base/tables'));

const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs'));
const Cards = React.lazy(() => import('./views/base/Cards'));
const Carousels = React.lazy(() => import('./views/base/carousels'));
const Collapses = React.lazy(() => import('./views/base/collapses'));
const BasicForms = React.lazy(() => import('./views/base/forms'));

const Jumbotrons = React.lazy(() => import('./views/base/jumbotrons'));
const ListGroups = React.lazy(() => import('./views/base/list-groups'));
const Navbars = React.lazy(() => import('./views/base/navbars'));
const Navs = React.lazy(() => import('./views/base/navs'));
const Paginations = React.lazy(() => import('./views/base/paginations'));
const Popovers = React.lazy(() => import('./views/base/popovers'));
const ProgressBar = React.lazy(() => import('./views/base/progress-bar'));
const Switches = React.lazy(() => import('./views/base/switches'));

const Tabs = React.lazy(() => import('./views/base/tabs'));
const Tooltips = React.lazy(() => import('./views/base/tooltips'));
const BrandButtons = React.lazy(() => import('./views/buttons/brand-buttons'));
const ButtonDropdowns = React.lazy(() => import('./views/buttons/button-dropdowns'));
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups'));
const Buttons = React.lazy(() => import('./views/buttons/buttons'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons'));
const Flags = React.lazy(() => import('./views/icons/flags'));
const Brands = React.lazy(() => import('./views/icons/Brands'));
const Alerts = React.lazy(() => import('./views/notifications/alerts'));
const Badges = React.lazy(() => import('./views/notifications/badges'));
const Modals = React.lazy(() => import('./views/notifications/modals'));
const Colors = React.lazy(() => import('./views/theme/colors'));
const Typography = React.lazy(() => import('./views/theme/typography'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
// const Users = React.lazy(() => import('./views/users/Users'));
// const User = React.lazy(() => import('./views/users/User'));


// Pages
 const Login = React.lazy(() => import('./views/pages/login'));
const Register = React.lazy(() => import('./views/pages/register'));
const Page404 = React.lazy(() => import('./views/pages/page404'));
const Page500 = React.lazy(() => import('./views/pages/page500'));


const routes = [
  { path: '/', exact: true, name: 'Home' },

  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
//   { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
//   { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/forms', name: 'Forms', component: BasicForms },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
//   { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
     { path: '/charts', name: 'Charts', component: Charts },
//   { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
//   { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/widgets', name: 'Widgets', component: Widgets },
   { path: '/widgets', name: 'Widgets', component: Widgets },
//   { path: '/users', exact: true,  name: 'Users', component: Users },
//   { path: '/users/:id', exact: true, name: 'User Details', component: User }


         { path: '/login', name: 'login', component: Login },
         { path: '/register', name: 'Register Page', component: Register },
         { path: '/404', name: 'Page 404', component: Page404 },
         { path: '/500', name: 'Page 500', component: Page500 },




];

export default routes;
