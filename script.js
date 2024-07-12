document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').slice(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Hide all sections
                document.querySelectorAll('main > section').forEach(section => {
                    section.classList.remove('active');
                });
                
                // Show target section
                targetSection.classList.add('active');
            }
        });
    });
});



