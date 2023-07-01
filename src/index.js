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
        grow: true,
    },
    {
        name: 'Peliculas',
        href: 'movies.html',
        grow: true,
    },
    {
        name: 'Series',
        href: 'tv.html',
        grow: true,
    },
    {
        name: 'Contacto',
        href: 'contacto.html',
    },
];

const navbar = document.getElementById('navbar');

/* fabricating navbar "on demand" */
navbar.innerHTML = navItems
    .map(({ name, href, grow }) => {
        return navbarItem({ name, href, grow });
    })
    .join('');
