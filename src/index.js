import { api } from './api/api.js';
import { navbarItem } from './components/navbar.js';
import { mainFooter } from './components/footer.js';

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

/* fabricating navbar "on demand" */
const navbar = document.getElementById('navbar');
navbar.innerHTML = navItems
    .map(({ name, href, grow }) => {
        return navbarItem({ name, href, grow });
    })
    .join('');

/* fabricating footer "on demand" */
const footer = document.getElementById('main-footer');
footer.innerHTML = mainFooter();

/* only for index page */
const mainContent = document.getElementById('main-content');
if (!!mainContent) {
    const carousel = document.getElementById('carousel');
    carousel.innerHTML = 'CAROUSEL';
}
