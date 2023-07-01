export const animatedPosterCard = (item) => {
    return `
    <div class="transition-all relative h-96 w-32 hover:w-56 hover:shrink-0" ${item.inMainScreen && `data-target="#main-carousel" data-slide-to="${item.index}"`}>
        <img class="absolute object-cover object-[center_top] h-full w-full rounded-2xl" src="${item.poster}" alt="${item.title}" />
        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-black/0 rounded-2xl"></div>
        <div class="absolute transition-all h-full w-full z-10 rounded-2xl text-white/0 hover:text-white">
            <p class="absolute bottom-2 w-full text-center font-bold">${item.title}</p>
        </div>
    </div>
    `;
};
