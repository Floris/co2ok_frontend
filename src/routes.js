import Home from './components/pages/Home/Home';
import Ninja from './components/pages/Ninja/Ninja';
import Faq from './components/pages/Faq/Faq';
import Projecten from './components/pages/Projecten/Projecten';
import Zakelijk from './components/pages/Zakelijk/Zakelijk';
import Login from './components/pages/Login/Login';
import Dashboard from './components/pages/Dashboard/Dashboard';
import About from './components/pages/About/About';
import Privacy from './components/pages/Privacy/Privacy';
import Installatie from './components/pages/Installatie/Installatie';
import Causemarketing from './components/pages/Causemarketing/Causemarketing';

export const routes = [{
    path: '/',
    component: Home
  }, {
    path: '/ninja',
    component: Ninja
  },
  {
    path: '/zakelijk',
    component: Zakelijk
  },
  {
    path: '/projecten',
    component: Projecten
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/faq',
    component: Faq
  },

  {
    path: '/login',
    component: Login
  },
  {
    path: '/dashboard',
    component: Dashboard
  },

  {
    path: '/privacy',
    component: Privacy
  },
  {
    path: '/installatie',
    component: Installatie
  }, {
    path: '/causemarketing',
    component: Causemarketing
  }
];
