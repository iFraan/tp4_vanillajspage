import { api } from './api/api.js';
import { navbarItem } from './components/navbar.js';

const navItems = [
    {
        name: 'Home',
        href: 'index.html',
    },
    {
        name: 'Discover',
        href: 'discover.html',
    },
    {
        name: 'Peliculas',
        href: 'movies.html',
    },
    {
        name: 'Series',
        href: 'tv.html',
    },
];

const navbar = document.getElementById('navbar');

/* fabricating navbar "on demand" */
navbar.innerHTML = navItems
    .map(({ name, href }) => {
        return navbarItem({ name, href });
    })
    .join('');
