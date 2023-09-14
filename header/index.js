function addHeader(toElement, elementToHide = null){
    const newHeader = document.createElement("div");

    let logoSrc = "https://images.ctfassets.net/aak4rmiplpud/4bDPd4m7cDjdCtFNQaOCoc/976e14237c72fd516ac561cde0affa86/loguitov1.png";

    newHeader.classList.add("header-principal");
    newHeader.innerHTML = `
        <span class="header-principal__logo-cont">
            <img src="${logoSrc}" alt="" class="header-principal__logo-cont__img">
        </span>

        <img src="./header/img/menu-svgrepo-com.png" alt="" class="header-principal__menu-img">
        <div class="header-principal__menu-extendido">
            <div class="header-principal__menu-extendido__portfolio">
                Portfolio
            </div>
            <div class="header-principal__menu-extendido__servicios">
                Servicios
            </div>
            <div class="header-principal__menu-extendido__contacto">
                Contacto
            </div>
        </div>
        <div class="header-principal__menu-completo-mobile">
            <img src="./header/img/menu-cerrar.png" alt="" class="header-principal__menu-completo-mobile__boton-cerrar">

            <div class="header-principal__menu-completo-mobile__portfolio">
                Portfolio
            </div>
            <div class="header-principal__menu-completo-mobile__servicios">
                Servicios
            </div>
            <div class="header-principal__menu-completo-mobile__contacto">
                Contacto
            </div>
        </div>
    `;

    newHeader.querySelector(".header-principal__logo-cont__img").addEventListener('click', () => {
        window.location.replace("./");
    });

    const menuExtendido = newHeader.querySelector(".header-principal__menu-completo-mobile");

    newHeader.querySelector(".header-principal__menu-img").addEventListener('click', () => {
        menuExtendido.classList.add("active-menu");

        if(elementToHide != null) {
            elementToHide.style.display = "none";
        }
    });

    newHeader.querySelector(".header-principal__menu-completo-mobile__boton-cerrar").addEventListener('click', () => {
        menuExtendido.classList.remove("active-menu");

        if(elementToHide != null) {
            elementToHide.style.display = "";
        }
    });

    newHeader.querySelector(".header-principal__menu-extendido__portfolio").addEventListener('click', () => {
        window.location.replace("./portfolio.html");
    });
    
    newHeader.querySelector(".header-principal__menu-completo-mobile__portfolio").addEventListener('click', () => {
        window.location.replace("./portfolio.html");
    });

    newHeader.querySelector(".header-principal__menu-extendido__servicios").addEventListener('click', () => {
        window.location.replace("./servicios.html");
    });
    
    newHeader.querySelector(".header-principal__menu-completo-mobile__servicios").addEventListener('click', () => {
        window.location.replace("./servicios.html");
    });

    newHeader.querySelector(".header-principal__menu-extendido__contacto").addEventListener('click', () => {
        window.location.replace("./contacto.html");
    });
    
    newHeader.querySelector(".header-principal__menu-completo-mobile__contacto").addEventListener('click', () => {
        window.location.replace("./contacto.html");
    });

    toElement.appendChild(newHeader);
}