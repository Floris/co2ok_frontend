import Home from './components/pages/Home/Home';
import Faq from './components/pages/Faq/Faq';
import About from './components/pages/About/About'
export const routes = [{
    path: '/',
    component: Home
  },
  {
    path: '/faq',
    component: Faq
  },
  {
    path: '/about',
    component: About
  }
];
