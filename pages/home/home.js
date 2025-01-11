/**
 * @author: nogoezen
 * @description: Homepage functionality
 * @date: 2025-01-11
 * @version: 1.0.0
 * @license: MIT
 * @copyright: © 2025 nogoezen. All rights reserved.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Handle favorite buttons
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    favoriteButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const icon = button.querySelector('i');
            icon.classList.toggle('far');
            icon.classList.toggle('fas');
            
            if (icon.classList.contains('fas')) {
                showToast('Added to favorites!');
            } else {
                showToast('Removed from favorites');
            }
        });
    });

    // Handle add to cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const productCard = button.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('.price').textContent;
            
            // Here you would typically add the item to a cart object/array
            console.log('Added to cart:', { name: productName, price: productPrice });
            showToast(`${productName} added to cart!`);
            
            // Animate the button
            button.textContent = 'Added!';
            button.style.backgroundColor = '#4CAF50';
            setTimeout(() => {
                button.textContent = 'Add to Cart';
                button.style.backgroundColor = '#596D48';
            }, 2000);
        });
    });

    // Handle newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            
            // Here you would typically send this to a server
            console.log('Newsletter signup:', email);
            showToast('Thank you for subscribing!');
            newsletterForm.reset();
        });
    }

    // Create and show toast messages
    function showToast(message) {
        // Remove existing toast if present
        const existingToast = document.querySelector('.toast');
        if (existingToast) {
            existingToast.remove();
        }

        // Create new toast
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        
        // Add styles
        Object.assign(toast.style, {
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#333',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '4px',
            zIndex: '1000',
            opacity: '0',
            transition: 'opacity 0.3s ease-in-out'
        });

        document.body.appendChild(toast);
        
        // Trigger animation
        requestAnimationFrame(() => {
            toast.style.opacity = '1';
        });

        // Remove toast after 3 seconds
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
        });
    }
}); 