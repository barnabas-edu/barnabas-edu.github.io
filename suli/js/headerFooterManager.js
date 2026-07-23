class MyHeader extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<header class="header" id="header">
        <div class="navbar">
                <div><a href="https://barnabas-edu.github.io" class="nav__logo">Horváth Barnabás Oldala</a></div>
                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">

                        <li class="nav__item">
                            <a href="/suli/" class="nav__link">
                                <span class="nav__name">Kezdőlap</span>
                            </a>
                        </li>

                        <li class="nav__item">
                            <a href="/tananyagok/" class="nav__link">
                                <span class="nav__name">5. A</span>
                            </a>
                        </li>

                        <li class="nav__item">
                            <a href="/szamologep/" class="nav__link">
                                <span class="nav__name">5. B</span>
                            </a>
                        </li>
						
						<li class="nav__item">
                            <a href="/rolam/" class="nav__link">
                                <span class="nav__name">5. C</span>
                            </a>
                        </li>
						<li class="nav__item">
                            <a href="/rolam/" class="nav__link">
                                <span class="nav__name">6. A</span>
                            </a>
                        </li>
						<li class="nav__item">
                            <a href="/rolam/" class="nav__link">
                                <span class="nav__name">6. B</span>
                            </a>
                        </li>
						<li class="nav__item">
                            <a href="/rolam/" class="nav__link">
                                <span class="nav__name">6. C</span>
                            </a>
                        </li>
						<li class="nav__item">
                            <a href="/rolam/" class="nav__link">
                                <span class="nav__name">7. A</span>
                            </a>
                        </li>
                    </ul>
                </div>
	<div class="theme-button-place">
        <div class="theme-button" id="themeMenuButton">
            <i class='bx bx-palette nav__icon'></i>
        </div>
	</div>

        <div class="popup" id="themePopup">
            <!-- Mód választó -->
            <div class="section-title" style="text-align: center">Mód</div>
            <div class="option-group" id="modeOptions">
				<div class="option" data-mode="auto"><span class="material-symbols-outlined">routine</span> Auto</div>
                <div class="option" data-mode="light"><span class="material-symbols-outlined"><use href="icon/light_mode.svg"/></span> Világos</div>
                <div class="option" data-mode="dark"><span class="material-symbols-outlined">dark_mode</span> Sötét</div>
            </div>

            <div class="section-title" style="text-align: center">Szín</div>
            <div style="display: flex; align-items: center; justify-content: center; gap: 0.5rem;" id="colorOptions">
                <span class="color-option" data-color="default" title="Alapértelmezett"></span>
                <span class="color-option" data-color="blue" title="Kék"></span>
                <span class="color-option" data-color="green" title="Zöld"></span>
				<span class="color-option" data-color="retro" title="Valami"></span>
            </div>
        </div>
    </header>
		`
	}
}

customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<center><footer>
		<nav>
        <li><a href="index.html">Kezdőlap</a></li>
        <li><a href="altkem.html">Általános kémia</a></li>
        </nav></footer><center>
		`
	}
}

customElements.define('my-footer', MyFooter)
