import DATA from './data.js';

export const api = {
    getMovies: () => {
        return DATA.filter((item) => item.type === 'MOVIE').map((item) => ({ ...item, year: new Date(item.release_date).getFullYear() }));
    },
    getTv: () => {
        return DATA.filter((item) => item.type === 'TV').map((item) => ({ ...item, year: new Date(item.release_date).getFullYear() }));
    },
    getAll: ({ limit = 10, random = false }) => {
        const data = [...DATA];
        if (random) data.sort(() => Math.random() - 0.5);
        return data.slice(0, limit).map((item) => ({ ...item, year: new Date(item.release_date).getFullYear() }));
    },
};
