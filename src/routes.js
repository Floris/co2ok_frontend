import Home from './components/pages/Home/Home';
import Faq from './components/pages/Faq/Faq';
import Projecten from './components/pages/Projecten/Projecten';
import Zakelijk from './components/pages/Zakelijk/Zakelijk';
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
    path: '/Zakelijk',
    component: Zakelijk
  }, {
    path: '/about',
    component: About
  },
  {
    path: '/privacy',
    component: Privacy
  }
];
