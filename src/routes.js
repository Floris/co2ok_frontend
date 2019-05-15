import Home from './components/pages/Home/Home';
import Faq from './components/pages/Faq/Faq';
import Projecten from './components/pages/Projecten/Projecten';
import Zakelijk from './components/pages/Zakelijk/Zakelijk';
import Login from './components/pages/Login/Login';
import Dashboard from './components/pages/Dashboard/Dashboard';
import About from './components/pages/About/About';
import Privacy from './components/pages/Privacy/Privacy';


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
    component: Projecten
  },
  {
    path: '/zakelijk',
    component: Zakelijk
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
    path: '/about',
    component: About
  },
  {
    path: '/privacy',
    component: Privacy
  }
];
