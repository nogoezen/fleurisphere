/**
 * @author: nogoezen
 * @description: Dashboard page functionality
 * @date: 2025-01-11
 * @version: 1.0.0
 * @license: MIT
 * @copyright: © 2025 nogoezen. All rights reserved.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Update current date
    const dateElement = document.querySelector('.date');
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = currentDate.toLocaleDateString('en-US', options);

    // Handle logout
    const logoutBtn = document.querySelector('.logout-btn');
    logoutBtn.addEventListener('click', () => {
        // Here you would typically handle the logout process
        console.log('Logging out...');
        window.location.href = '../login/index.html';
    });

    // Simulate real-time updates (for demo purposes)
    let orderCount = 12;
    let revenue = 1234;
    
    setInterval(() => {
        // Randomly update stats
        if (Math.random() > 0.7) {
            orderCount++;
            revenue += Math.floor(Math.random() * 100);
            
            document.querySelector('.dashboard-card:nth-child(1) .stat').textContent = orderCount;
            document.querySelector('.dashboard-card:nth-child(2) .stat').textContent = `$${revenue}`;
        }
    }, 5000);

    // Add hover effect to activity items
    const activityItems = document.querySelectorAll('.activity-item');
    activityItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateX(10px)';
            item.style.transition = 'transform 0.3s ease';
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateX(0)';
        });
    });
}); 