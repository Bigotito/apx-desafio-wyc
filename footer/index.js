function addFooter(toElement){
    const newFooter = document.createElement("div");

    let logoSrc = "https://images.ctfassets.net/aak4rmiplpud/4bDPd4m7cDjdCtFNQaOCoc/976e14237c72fd516ac561cde0affa86/loguitov1.png";

    newFooter.classList.add("footer-principal");
    newFooter.innerHTML = `
        <div class="footer-principal__logo-cont">
            <img src="${logoSrc}" alt="" class="footer-principal__logo-cont__img">
        </div>

        <div class="footer-principal__home-cont">
            <img src="./footer/icon/home.svg" alt="">
            Home
        </div>
        <div class="footer-principal__servicios-cont">
            <img src="./footer/icon/user.svg" alt="">
            Servicios
        </div>
        <div class="footer-principal__contacto-cont">
            <img src="./footer/icon/phone.svg" alt="">
            Contacto
        </div>

        <div class="footer-principal__links-cont">
            <div class="footer-principal__links-cont__linkedin-cont">
                <img src="./footer/icon/linkedin-svgrepo-com.svg" alt="">
            </div>
            
            <div class="footer-principal__links-cont__github-cont">
                <img src="./footer/icon/github-svgrepo-com.svg" alt="">
            </div>
            
            <div class="footer-principal__links-cont__twitter-cont">
                <img src="./footer/icon/twitter.svg" alt="">
            </div>
        </div>

        <p>
            ©2022 - https://apx.school
        </p>
    `;

    newFooter.querySelector(".footer-principal__home-cont").addEventListener('click', () => {
        window.location.replace("./");
    });

    newFooter.querySelector(".footer-principal__servicios-cont").addEventListener('click', () => {
        window.location.replace("./servicios.html");
    });

    newFooter.querySelector(".footer-principal__contacto-cont").addEventListener('click', () => {
        window.location.replace("./contacto.html");
    });

    newFooter.querySelector(".footer-principal__links-cont__linkedin-cont").addEventListener('click', () => {
        // window.location.replace("https://www.linkedin.com/in/gabrielfgonzalez/");
        window.location.href = "https://www.linkedin.com/in/gabrielfgonzalez/";
    });

    newFooter.querySelector(".footer-principal__links-cont__github-cont").addEventListener('click', () => {
        // window.location.replace("https://github.com/Bigotito");
        window.location.href = "https://github.com/Bigotito";
    });
    
    newFooter.querySelector(".footer-principal__links-cont__twitter-cont").addEventListener('click', () => {
        // window.location.replace("https://twitter.com/");
        window.location.href = "https://twitter.com/";
    });

    toElement.appendChild(newFooter);
}