import Home from './components/pages/Home/Home';
import Zakelijk from './components/pages/Zakelijk/Zakelijk';

export const routes = [
    { 
        path: '/', 
        component: Home 
    },
    {
        path: '/zakelijk',
        component: Zakelijk
    }
];