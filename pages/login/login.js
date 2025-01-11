/**
 * @author: nogoezen
 * @description: Login page functionality
 * @date: 2025-01-11
 * @version: 1.0.0
 * @license: MIT
 * @copyright: © 2025 nogoezen. All rights reserved.
 */

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    const passwordToggle = document.querySelector('.toggle-password');
    
    // Password visibility toggle
    passwordToggle.addEventListener('click', function() {
        const input = this.previousElementSibling;
        const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
        input.setAttribute('type', type);
        
        // Toggle icon
        const icon = this.querySelector('i');
        icon.classList.toggle('fa-eye');
        icon.classList.toggle('fa-eye-slash');
    });

    // Form validation
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        
        // Reset error messages
        form.querySelectorAll('.error-message').forEach(error => error.textContent = '');
        
        // Validate email
        if (!email.value) {
            isValid = false;
            email.nextElementSibling.textContent = 'Email is required';
        } else if (!isValidEmail(email.value)) {
            isValid = false;
            email.nextElementSibling.textContent = 'Please enter a valid email address';
        }
        
        // Validate password
        if (!password.value) {
            isValid = false;
            password.nextElementSibling.textContent = 'Password is required';
        }
        
        if (isValid) {
            // Submit form
            console.log('Form is valid, submitting...');
            // Add your form submission logic here
        }
    });

    // Social login handlers
    document.querySelector('.google').addEventListener('click', function() {
        console.log('Google login clicked');
        // Add Google login logic
    });

    document.querySelector('.facebook').addEventListener('click', function() {
        console.log('Facebook login clicked');
        // Add Facebook login logic
    });
});

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
} 