const gallery = document.getElementById('gallery');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

let scrollAmount = 0;
const projectWidth = 1300; 
const totalProjects = gallery.children.length;

const firstItems = gallery.innerHTML;
gallery.innerHTML += firstItems;

rightArrow.addEventListener('click', () => {
    scrollAmount += projectWidth;
    gallery.scrollBy({
        left: projectWidth,
        behavior: 'smooth'
    });
    
    if (scrollAmount >= projectWidth * totalProjects) {
        setTimeout(() => {
            gallery.scrollTo({ left: 0 });
            scrollAmount = 0;
        }, 500); 
    }
});


leftArrow.addEventListener('click', () => {
    if (scrollAmount <= 0) {
        gallery.scrollTo({ left: projectWidth * totalProjects });
        scrollAmount = projectWidth * totalProjects;
    }
    
    scrollAmount -= projectWidth;
    gallery.scrollBy({
        left: -projectWidth,
        behavior: 'smooth'
    });
});
