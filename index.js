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

// Select the cursor element
const cursor = document.querySelector('.cursor');

// Variables to store the position of the cursor
let mouseX = 0;
let mouseY = 0;

// Variables to store the position of the trailing effect
let cursorX = 0;
let cursorY = 0;

// Mousemove event to capture the current position of the mouse
document.addEventListener('mousemove', (e) => {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

// Animation loop for smooth trailing movement
function animateCursor() {
  // Apply a small easing effect for the trailing animation
  cursorX += (mouseX - cursorX) * 0.1;
  cursorY += (mouseY - cursorY) * 0.1;
  
  // Set the custom cursor position
  cursor.style.left = cursorX + 'px';
  cursor.style.top = cursorY + 'px';
  
  // Continue the animation loop
  requestAnimationFrame(animateCursor);
}

// Start the animation loop
animateCursor();
