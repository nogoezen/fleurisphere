/**
 * "@"author: "nogoezen "
 * "@"description: "This is the script for the signup form"
 * "@"date: "2025-01-11"
 * "@"version: "1.0.0"
 * "@"license: "MIT"
 * "@"copyright: "© 2025 nogoezen. All rights reserved."
 */

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const inputs = form.querySelectorAll('input');

    // Show error message
    const showError = (input, message) => {
        const errorSpan = input.nextElementSibling;
        if (errorSpan && errorSpan.classList.contains('error-message')) {
            errorSpan.textContent = message;
        }
        input.style.borderColor = '#e74c3c';
    };


    // Clear error message
    const clearError = (input) => {
        const errorSpan = input.nextElementSibling;
        if (errorSpan && errorSpan.classList.contains('error-message')) {
            errorSpan.textContent = '';
        }
        input.style.borderColor = '#ccc';
    };

    // Validate password
    const validatePassword = () => {
        const passwordValue = password.value;
        const confirmValue = confirmPassword.value;

        if (passwordValue.length < 8) {
            showError(password, 'Password must be at least 8 characters long');
            return false;
        }

        if (!/[A-Z]/.test(passwordValue)) {
            showError(password, 'Password must contain at least one uppercase letter');
            return false;
        }

        if (!/[a-z]/.test(passwordValue)) {
            showError(password, 'Password must contain at least one lowercase letter');
            return false;
        }

        if (!/[0-9]/.test(passwordValue)) {
            showError(password, 'Password must contain at least one number');
            return false;
        }

        if (passwordValue !== confirmValue) {
            showError(confirmPassword, 'Passwords do not match');
            return false;
        }

        clearError(password);
        clearError(confirmPassword);
        return true;
    };

    // Add input event listeners
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            if (input.validity.valid) {
                clearError(input);
            }
            
            if (input.type === 'password') {
                validatePassword();
            }
        });
    });

    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        // Check required fields
        inputs.forEach(input => {
            if (input.hasAttribute('required') && !input.value.trim()) {
                showError(input, 'This field is required');
                isValid = false;
            }
        });

        // Validate email format
        const email = document.getElementById('email');
        if (email.value && !email.validity.valid) {
            showError(email, 'Please enter a valid email address');
            isValid = false;
        }

        // Validate password
        if (!validatePassword()) {
            isValid = false;
        }

        if (isValid) {
            // Here you would typically send the form data to a server
            console.log('Form submitted successfully');
            form.reset();
        }
    });
}); 