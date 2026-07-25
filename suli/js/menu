(function() {
        // Hamburger elemek kiválasztása
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav__list");

        if (!hamburger || !navMenu) return;

        // Nyitás / zárás kattintásra
        hamburger.addEventListener("click", (e) => {
            e.stopPropagation();
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        // Ha bármelyik menüpontra kattintanak, zárjuk be a mobil menüt
        const navLinks = document.querySelectorAll(".nav__link");
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            });
        });

        // Kattintás az oldal bármely más pontjára → bezárás (jobb UX)
        document.addEventListener("click", (event) => {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnHamburger = hamburger.contains(event.target);
            
            if (navMenu.classList.contains("active") && !isClickInsideNav && !isClickOnHamburger) {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            }
        });

        // Ablak átméretezésekor, ha desktop méretre vált, biztosítsuk, hogy a menü ne maradjon nyitva
        window.addEventListener("resize", () => {
            if (window.innerWidth > 768) {
                if (navMenu.classList.contains("active")) {
                    hamburger.classList.remove("active");
                    navMenu.classList.remove("active");
                }
            }
        });
    })();
