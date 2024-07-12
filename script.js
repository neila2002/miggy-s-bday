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

    // Replace placeholders with actual content
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);

    const placeholders = {
        '[MIGGYYYY]': 'Your Friend',
        '[TODAY JULY 14 2024]': formattedDate,
        '[RIGHT NOW]': 'Anytime you want',
        '[RIGHT HERE MFA]': 'In the comfort of your home',
        '[Contact Information]': '123-456-7890',
        'https://codes.rewardcodes.com/r2/1/HQxSRimHiXuYokE4bzsRbxU8zrDl6VUEBrZh271y7ik6illK5mKKm9H_ZrrIMsho': 'https://codes.rewardcodes.com/r2/1/HQxSRimHiXuYokE4bzsRbxU8zrDl6VUEBrZh271y7ik6illK5mKKm9H_ZrrIMsho'
    };

    const elements = document.querySelectorAll('body *');

    elements.forEach(el => {
        el.innerHTML = el.innerHTML.replace(
            /\[(MIGGYYYY|TODAY JULY 14 2024|RIGHT NOW|RIGHT HERE MFA|Contact Information|https:\/\/codes.rewardcodes.com\/r2\/1\/HQxSRimHiXuYokE4bzsRbxU8zrDl6VUEBrZh271y7ik6illK5mKKm9H_ZrrIMsho)\]/gi,
            match => placeholders[match]
        );
    });
});
