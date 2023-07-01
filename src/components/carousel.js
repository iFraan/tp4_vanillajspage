export const carouselItem = (item) => {
    return `
    <div class="carousel-item ${item.active && 'active'} h-full w-full">
        <img class="object-cover h-full w-full" src="${item.backdrop}" alt="${item.title}" />
    </div>
    `;
};
