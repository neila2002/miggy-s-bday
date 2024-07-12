document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    const sections = document.querySelectorAll('main > section');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').slice(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Hide all sections
                sections.forEach(section => {
                    section.style.display = 'none';
                });

                // Show target section
                targetSection.style.display = 'block';
            }
        });
    });
});
