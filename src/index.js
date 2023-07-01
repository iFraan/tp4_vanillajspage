import { api } from './api/api.js';
import { navbarItem } from './components/navbar.js';
import { mainFooter } from './components/footer.js';
import { carouselItem } from './components/carousel.js';
import { animatedPosterCard } from './components/card.js';

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
    const items = api.getAll({ limit: 20, random: true }).map((item, index) => ({
        ...item,
        index,
        active: index === 0,
        inMainScreen: true,
    }));
    /* carousel */
    const carousel = document.getElementById('carousel-content');
    carousel.innerHTML = items.map(carouselItem).join('');

    /* recent movies/tv */
    const recents = document.getElementById('recents-content');
    recents.innerHTML = items.map(animatedPosterCard).join('');
}

/* only for other page */
const mainDiscover = document.getElementById('main-discover');
if (!!mainDiscover) {
}
