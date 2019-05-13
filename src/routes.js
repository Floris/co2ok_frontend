import Home from './components/pages/Home/Home';
import Faq from './components/pages/Faq/Faq';
import Projecten from './components/pages/Projecten/Projecten';
import Zakelijk from './components/pages/Zakelijk/Zakelijk';
import Login from './components/pages/Login/Login';

export const routes = [{
    path: '/',
    component: Home
  },
  {
    path: '/faq',
    component: Faq
  },
  {
    path: '/projecten',
    component: Projecten,
  }, {
    path: '/zakelijk',
    component: Zakelijk
  },
  {
    path: '/login',
    component: Login
  }
];
