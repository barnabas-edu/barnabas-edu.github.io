const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');
        const overlay = document.getElementById('overlay');

        function toggleMenu() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            overlay.classList.toggle('active');

            // Scroll tiltása, amikor a menü nyitva van
            document.body.style.overflow =
                navLinks.classList.contains('active') ? 'hidden' : '';
        }

        function closeMenu() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }

        hamburger.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', closeMenu);

        // Menü bezárása, ha egy linkre kattintanak
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // ESC billentyűvel is bezárható
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                closeMenu();
            }
        });
