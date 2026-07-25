class MyHeader extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<header class="header" id="header">
        <div class="navbar">
                <div><a href="https://barnabas-edu.github.io" class="nav__logo">Horváth Barnabás Oldala</a></div>
                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">

                        <li class="nav__item">
                            <a href="/" class="nav__link">
                                <i class='bx bx-home-alt nav__icon'></i>
                                <span class="nav__name">Kezdőlap</span>
                            </a>
                        </li>

                        <li class="nav__item">
                            <a href="/tananyagok/" class="nav__link">
                                <i class='bx bx-book nav__icon'></i>
                                <span class="nav__name">Tananyagok</span>
                            </a>
                        </li>

                        <li class="nav__item">
                            <a href="/szamologep/" class="nav__link">
                                <i class='bx bx-calculator nav__icon'></i>
                                <span class="nav__name">Számológép</span>
                            </a>
                        </li>
						
						<li class="nav__item">
                            <a href="/rolam/" class="nav__link">
                                <i class='bx bx-user nav__icon'></i>
                                <span class="nav__name">Rólam</span>
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
                <div class="option" data-mode="light">
				<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M565-395q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35Zm-226.5 56.5Q280-397 280-480t58.5-141.5Q397-680 480-680t141.5 58.5Q680-563 680-480t-58.5 141.5Q563-280 480-280t-141.5-58.5ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/></svg>Világos</div>
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
