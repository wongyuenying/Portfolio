const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.navigation-item');
const navMenu = document.querySelector('.nav-menu');
const menuToggle = document.querySelector('.menu-toggle');


// Function to update active state
function updateActiveState() {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - 150 && window.scrollY < sectionTop + sectionHeight - 150) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach((item) => {
        item.classList.remove("active");
        const itemHref = item.getAttribute('href').substring(1);
        if (itemHref === current) {
            item.classList.add("active");
        }

    });

    if (window.scrollY < 150) {
        navItems.forEach((item) => {
            if (item.getAttribute('href') === '#Home') {
                item.classList.add("active");
            }
        });
    }

    // Special case for WakeNow and AirBlaster sections to highlight "WORK"
    if (current == 'WakeNow' || current == 'AirBlaster' || current=='Loop') {
        navItems.forEach((item) => {
            if (item.getAttribute('href') == '#Work') {
                item.classList.add("active");
            }
        });
    }

}

// Function to expand the navbar
function expandNavbar() {
    navMenu.classList.toggle('active');
}

// Function to close the navbar
function closeNavbar() {
    navMenu.classList.remove('active');
}

// Add event listeners to navigation items
navItems.forEach((item) => {
    item.addEventListener("click", function () {
        navItems.forEach((navItem) => navItem.classList.remove("active"));
        this.classList.add("active");
        closeNavbar();
    });
});

// Add event listeners for scroll and load events
window.addEventListener('scroll', updateActiveState);
window.addEventListener('load', updateActiveState);

// Initial call to set the active state on page load
updateActiveState();

document.addEventListener('DOMContentLoaded', function () {
    const projectCards = document.querySelectorAll('.image-background');

    window.addEventListener('scroll', () => {
        let expandedCard = null;

        projectCards.forEach((card, index) => {
            const rect = card.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

            if (isVisible) {
                if (expandedCard) {
                    expandedCard.classList.remove('expanded');
                }
                card.classList.add('expanded');
                expandedCard = card;
            } else {
                card.classList.remove('expanded');
            }
        });
    });
});

//propic
document.addEventListener('mousemove', parallax);
function parallax(e) {
    document.querySelectorAll('.object').forEach(function (move) {

        var moving_value = move.getAttribute('data-value');
        var x = (e.clientX * moving_value) / 450;
        var y = (e.clientY * moving_value) / 450;

        move.style.transform = 'translateX(' + x + 'px) translateY(' + y + 'px)';
    });
}



const faders = document.querySelectorAll('.fade-in');
const appearOptions ={
    threshold:0.6,
    rootMargin: "0px 0px -80px 0px"
};
const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll) { 
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                return;
            }else {
                entry.target.classList.add('visible');
                appearOnScroll.unobserve(entry.target);
            }
        })
    },
    appearOptions);

    faders.forEach(fader =>{
        appearOnScroll.observe(fader);
    })
    var typed = new Typed("#multiText", {
        strings: ['DESIGN', 'CODE.'],
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 1000,
        startDelay: 0
    });
    