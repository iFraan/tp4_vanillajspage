export const navbarItem = ({ name, href, grow = false }) => {
    return `
    <a class="
        transition-all 
        py-1.5 px-5 
        rounded-md
        text-center
        bg-slate-500/50 hover:bg-slate-600/50
        scale-100 hover:scale-105
        text-white
        font-bold
        ${grow && 'grow bg-slate-800/50'}
    "
    href={${href}}
    >
        ${name}
    </a>
    `;
};
