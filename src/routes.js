import Home from './components/pages/Home/Home';
import Faq from './components/pages/Faq/Faq';
import Zakelijk from './components/pages/Zakelijk/Zakelijk';

export const routes = [{
    path: '/',
    component: Home
  },
  {
    path: '/faq',
    component: Faq
  },
  {
    path: '/Zakelijk',
    component: Zakelijk
  }
];