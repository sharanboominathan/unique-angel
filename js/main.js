document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Sticky Navbar & Transparent to Solid Background
    const navbar = document.getElementById('navbar');
    
    // Function to handle navbar scroll effect
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    // Execute on load and scroll
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    // 2. Mobile Menu Auto-Close on Link Click
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.getElementById('navbarNav');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });
    
    // 3. Scroll Animations using Intersection Observer
    const animatedElements = document.querySelectorAll('.fade-up, .fade-in');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Unobserve after animating
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
    
    // 4. Update the navbar links text color logic
    // We already handled .scrolled class, but if we start at top, it's transparent (white text)
    // .scrolled turns it solid (charcoal text). CSS handles the transition.
});
