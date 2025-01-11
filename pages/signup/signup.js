document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    const passwordToggles = document.querySelectorAll('.toggle-password');
    
    // Password visibility toggle
    passwordToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const input = this.previousElementSibling;
            const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
            input.setAttribute('type', type);
            
            // Toggle icon
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-eye');
            icon.classList.toggle('fa-eye-slash');
        });
    });

    // Form validation
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirmPassword');
        
        // Reset error messages
        form.querySelectorAll('.error-message').forEach(error => error.textContent = '');
        
        // Validate required fields
        form.querySelectorAll('input[required]').forEach(input => {
            if (!input.value) {
                isValid = false;
                input.nextElementSibling.textContent = 'This field is required';
            }
        });
        
        // Validate email format
        const email = document.getElementById('email');
        if (email.value && !isValidEmail(email.value)) {
            isValid = false;
            email.nextElementSibling.textContent = 'Please enter a valid email address';
        }
        
        // Validate password
        if (password.value && !isValidPassword(password.value)) {
            isValid = false;
            password.nextElementSibling.textContent = 
                'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number';
        }
        
        // Validate password match
        if (password.value !== confirmPassword.value) {
            isValid = false;
            confirmPassword.nextElementSibling.textContent = 'Passwords do not match';
        }
        
        if (isValid) {
            // Submit form
            console.log('Form is valid, submitting...');
            // Add your form submission logic here
        }
    });
});

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPassword(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password);
} 