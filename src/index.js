import { api } from './api/api.js';
import { navbarItem } from './components/navbar.js';
import { mainFooter } from './components/footer.js';
import { carouselItem } from './components/carousel.js';
import { animatedPosterCard, posterCard } from './components/card.js';

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

/* only for others pages */
const mainDiscover = document.getElementById('main-discover');
if (!!mainDiscover) {
    const from = document.location.pathname.replace('/', '').replace('.html', '');
    const items = [];
    switch (from) {
        case 'movies':
            items.push(...api.getMovies());
            break;
        case 'tv':
            items.push(...api.getTv());
            break;
        default:
            items.push(...api.getAll({ limit: 999 }));
            break;
    }

    /* default sort */
    items.sort((a, b) => b.release_date - a.release_date);

    const search = {
        title: '',
        year: '',
        type: '',
    };

    let showItems = [...items];

    const updateFilter = () => {
        showItems = items.filter((item) => {
            const filter = {
                return: true,
            };

            for (const att of Object.keys(search)) {
                if (search[att] !== '') {
                    filter.return = filter.return && item[att].toString().toLowerCase().includes(search[att].toString().toLowerCase());
                }
            }

            return filter.return;
        });

        /* recent movies/tv */
        const recents = document.getElementById('content-discover');
        recents.innerHTML = showItems.map(posterCard).join('');
    };

    updateFilter(); // on mount

    /* bind inputs */
    const searchInput = document.getElementById('input-main-search');
    searchInput &&
        searchInput.addEventListener('input', () => {
            search.title = searchInput.value;
            updateFilter();
        });
    const yearInput = document.getElementById('input-year-search');
    yearInput &&
        yearInput.addEventListener('input', () => {
            search.year = yearInput.value;
            updateFilter();
        });
    const typeSelect = document.getElementById('input-type-select');
    typeSelect &&
        typeSelect.addEventListener('change', () => {
            search.type = typeSelect.value;
            updateFilter();
        });
}
