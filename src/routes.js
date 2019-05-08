import Home from './components/pages/Home/Home';
import Faq from './components/pages/Faq/Faq';
import Projecten from './components/pages/Projecten/Projecten';

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
  }
];
