export const carouselItem = (item) => {
    return `
    <div class="carousel-item ${item.active && 'active'} h-full w-full">
        <img class="absolute object-cover object-[center_top] h-full w-full rounded-2xl" src="${item.backdrop}" alt="${item.title}" />
        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-black/0 rounded-2xl"></div>
        <div class="absolute bottom-16 left-12 text-5xl font-bold text-white z-20">${item.title}</div>
        <div class="absolute bottom-8 left-12 text-xl text-white z-20">${item.original_title}</div>
        <div class="absolute bottom-8 right-12 text-2xl font-bold text-slate-300 z-20">${new Date(item.release_date).getFullYear()}</div>
    </div>
    `;
};
