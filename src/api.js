import DATA from './data.js';

export const items = {
    getMovies: () => {
        return DATA.filter((item) => item.type === 'MOVIE');
    },
    getTv: () => {
        return DATA.filter((item) => item.type === 'TV');
    },
    getAll: ({ limit = 10 }) => {
        return DATA.slice(0, limit);
    },
};
