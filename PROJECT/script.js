const nav = document.querySelector('nav');
const toggle_btn = document.getElementById('toggle-btn');
const content = document.querySelector('section');

toggle_btn.onclick = function() {
    nav.classList.toggle('hide');
    content.classList.toggle('expand');
    
};

const body = document.querySelector('body');
const bgModeBtn = document.getElementById('bgModeBtn');
const bgModeIcon = document.getElementById('bgModeIcon');
const sectionHeader = document.querySelector('section h1');

bgModeBtn.onclick = function(){
    body.classList.toggle("dark-mode");
    bgModeIcon.classList.toggle("fa-sun-o");
    bgModeIcon.classList.toggle("fa-moon-o");
    sectionHeader.classList.toggle("dark-mode");
}
const images = [ 
    'img1.jpg', 
    'bg1.jpg', 
    'bg2.jpg' 
]; 
 
let currentIndex = 0; 
 
function changeImage() { 
    const slideshow = document.getElementById('slideshow'); 
    currentIndex = (currentIndex + 1) % images.length; 
    slideshow.style.opacity = 0; // Fade out 
    setTimeout(() => { 
        slideshow.src = images[currentIndex]; 
        slideshow.style.opacity = 1; // Fade in 
    }, 1000); // Wait for fade out to finish 
} 

function feedback(){
    // if (document.getElementById('txtarea').value ){
    document.getElementById("subm").style.display="none";
    document.getElementById("txtarea").style.display="none";
    document.getElementById("txt").textContent="THANKS FOR YOUR FEEDBACK!";
    // }
    // button
}