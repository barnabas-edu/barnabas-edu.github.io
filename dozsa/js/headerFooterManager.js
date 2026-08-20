class MyHeader extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<header class="header" id="header">
        <div class="navbar">
                <div><a href="/dozsa/" class="nav__logo">Horváth Barnabás Oldala</a></div>
               <div class="nav__menu" id="nav-menu">
				    <ul class="nav__list" id="navLinks"><li class="nav__item">
                            <a href="/dozsa/" class="nav__link">Kezdőlap</a>
                        </li>
                        
                        <li class="nav__item" id="osztaly">
                            <a href="/dozsa/5A" class="nav__link">5. A</a>
                        </li>

                        <li class="nav__item" id="osztaly">
                            <a href="/dozsa/5B" class="nav__link">5. B</a>
                        </li>
						
						<li class="nav__item" id="osztaly">
                            <a href="/dozsa/5C" class="nav__link">5. C </a>
                        </li>
						<li class="nav__item" id="osztaly">
                            <a href="/dozsa/6A" class="nav__link">6. A</a>
                        </li>
						<li class="nav__item" id="osztaly">
                            <a href="/dozsa/6B" class="nav__link">6. B</a>
                        </li>
						<li class="nav__item" id="osztaly">
                            <a href="/dozsa/6C" class="nav__link">6. C</a>
                        </li>
						<li class="nav__item" id="osztaly">
                            <a href="/dozsa/7A" class="nav__link">7. A</a>
                        </li>
              	  <li class="nav__item" id="osztalyok">
                            <a href="/dozsa/oszt" class="nav__link">Osztályok</a>
                        </li></ul>
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
				<div class="option" data-mode="auto"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M337.5-463Q311-498 289-537q-5 14-6.5 28.5T281-480q0 83 58 141t141 58q14 0 28.5-2t28.5-6q-39-22-74-48.5T396-396q-32-32-58.5-67ZM567-364.5Q630-328 702-308q-40 51-98 79.5T481-200q-117 0-198.5-81.5T201-480q0-65 28.5-123t79.5-98q20 72 56.5 135T453-452q51 51 114 87.5ZM743-380q-20-5-39.5-11T665-405q8-18 11.5-36.5T680-480q0-83-58.5-141.5T480-680q-20 0-38.5 3.5T405-665q-8-19-13.5-38T381-742q24-9 49-13.5t51-4.5q117 0 198.5 81.5T761-480q0 26-4.5 51T743-380ZM440-840v-120h80v120h-80Zm0 840v-120h80V0h-80Zm323-706-57-57 85-84 57 56-85 85ZM169-113l-57-56 85-85 57 57-85 84Zm671-327v-80h120v80H840ZM0-440v-80h120v80H0Zm791 328-85-85 57-57 84 85-56 57ZM197-706l-84-85 56-57 85 85-57 57Zm199 310Z"/></svg> Auto</div>
                <div class="option" data-mode="light">
				<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M565-395q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35Zm-226.5 56.5Q280-397 280-480t58.5-141.5Q397-680 480-680t141.5 58.5Q680-563 680-480t-58.5 141.5Q563-280 480-280t-141.5-58.5ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/></svg>Világos</div>
                <div class="option" data-mode="dark"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg> Sötét</div>
            </div>

            <div class="section-title" style="text-align: center">Szín</div>
            <div style="display: flex; align-items: center; justify-content: center; gap: 0.5rem;" id="colorOptions">
                <span class="color-option" data-color="default" title="Alapértelmezett"></span>
                <span class="color-option" data-color="blue" title="Kék"></span>
                <span class="color-option" data-color="green" title="Zöld"></span>
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
