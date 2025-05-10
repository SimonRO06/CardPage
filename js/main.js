class HeroCard extends HTMLElement {
    constructor() {
        super();
        
        const SHADOW = this.attachShadow({ mode: 'open' });

        const CARD_CONTAINER = document.createElement('div');
        const CARD_INFO_CONTAINER = document.createElement('div');
        const NOMBRE = document.createElement('h1');
        const IMAGEN = document.createElement('img');
        const NOMBRE_CLAVE = document.createElement('p');
        const CASA = document.createElement('p');
        const AÑO = document.createElement('p');
        const DESCRIPCION = document.createElement('p');
        const BOTON_VER_MAS = document.createElement('a');
        
        CARD_CONTAINER.className = 'card';
        CARD_CONTAINER.setAttribute("nombre", "");
        CARD_CONTAINER.setAttribute("imagen", "https://i.pinimg.com/236x/a8/da/22/a8da222be70a71e7858bf752065d5cc3.jpg");
        CARD_CONTAINER.setAttribute("nombre-clave", "");
        CARD_CONTAINER.setAttribute("casa", "");
        CARD_CONTAINER.setAttribute("año", "");
        CARD_CONTAINER.setAttribute("descripcion", "");

        const nombre = this.getAttribute("nombre") || "Desconocido";
        const imagen = this.getAttribute("imagen") || "https://i.pinimg.com/236x/a8/da/22/a8da222be70a71e7858bf752065d5cc3.jpg";
        const identidad = this.getAttribute("nombre-clave") || "Desconocido";
        const casa = this.getAttribute("casa") || "Desconocido";
        const año = this.getAttribute("año") || "Desconocido";
        const descripcion = this.getAttribute("descripcion") || "Sin descripción";

        CARD_INFO_CONTAINER.className = 'content';

        NOMBRE.id = 'card-title';
        NOMBRE.innerHTML = `${nombre}`;

        IMAGEN.id = 'image';
        IMAGEN.src = imagen;

        NOMBRE_CLAVE.id = 'identity';
        NOMBRE_CLAVE.innerHTML = `<strong>NOMBRE CLAVE: </strong> ${identidad}`;

        CASA.id = 'home';
        CASA.innerHTML = `<strong>CASA: </strong> ${casa}`;

        AÑO.id = 'year';
        AÑO.innerHTML = `<strong>AÑO: </strong> ${año}`;

        DESCRIPCION.id = 'description';
        DESCRIPCION.innerHTML = `<strong>DESCRIPCION: </strong> ${descripcion}`;

        function ver_mas() {
        const CARDS = document.querySelectorAll('hero-card');
        CARDS.forEach(card => {
            card.style.display = 'none';
            });
            class InfoCard extends HTMLElement {
                constructor() {
                    super()
                        const SHADOW = this.attachShadow({ mode: 'open' });

                        const CARD_CONTAINER = document.createElement('div');
                        const IMAGEN = document.createElement('img');
                        const COSA = document.createElement('h3');
                        const DESCRIPCION = document.createElement('p');

                        IMAGEN.src = imagen;

                        COSA.innerHTML = descripcion

                        CARD_CONTAINER.append(IMAGEN);
                        SHADOW.append(CARD_CONTAINER);

                }
            }
            customElements.define('info-card', InfoCard);
        }

        BOTON_VER_MAS.id = 'btn-ver-mas';
        BOTON_VER_MAS.href = `#`;
        BOTON_VER_MAS.innerHTML = `VER MAS`;
        BOTON_VER_MAS.addEventListener('click', ver_mas);

        const styles = `
        .btn {
        text-decoration: none;
        color: white;
        background-color: black;
        padding: 5px;
        border-radius: 5px;
        }
        #cards {
            background-color: rgb(150, 0, 0);
            height: 94vh;
            border-radius: 5px;
            padding: 5px;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 10px;
            overflow: scroll;
        }
        #cards::-webkit-scrollbar {
            display: none;
        }
        .card {
            background-image: url(https://static.vecteezy.com/system/resources/previews/022/275/674/non_2x/black-color-comic-style-lines-background-illustration-free-vector.jpg);
            background-size: cover;
            width: 15vw;
            height: 75vh;
            overflow: hidden;
            padding: 5px 10px;
            border: 2px solid rgb(0, 0, 0);
            border-radius: 5px;
            grid-column: auto;
        }
        .card:hover {
            transition: 0.2s ease;
            transform: scale(1.07);
        }
        #card-title {
            background-size: cover;
            text-align: center;
        }
        #image {
            display: block;
            width: 10vw;
            height: 20vh;
            border-radius: 100%;
            margin-left: 15%;
        }
        #btn-ver-mas {
            text-decoration: none;
            padding: 10px;
            display: flex;
            justify-content: center;
            color: black;
            background-color: rgb(255, 106, 106);
            border-radius: 5px;
        }
        .content {
            background-color: rgba(255, 255, 255, 0.73);
            overflow: scroll;
            height: 85%;
            border-radius: 5px;
            padding: 10px;
            margin-bottom: 5px;
        }
        .content::-webkit-scrollbar {
            display: none;
        }
        #card-title {
            font-family: "Bungee Tint", sans-serif;
            font-weight: 400;
            font-style: normal;
        }
        #btn-ver-mas {
        }
        @media (max-width: 500px) {
            .card {
                width: 40vw;
                height: 60vh;
                overflow: hidden;
                padding: 5px 10px;
                border: 2px solid rgb(0, 0, 0);
                border-radius: 5px;
                grid-column: auto;
            }
            #image {
                display: block;
                margin: auto;
                width: 80%;
                height: 30%;
                border-radius: 100%;
            }
        }
    `;

        const styleSheet = document.createElement("style");
        styleSheet.textContent = styles;
        SHADOW.appendChild(styleSheet);
        CARD_INFO_CONTAINER.append(NOMBRE, IMAGEN, NOMBRE_CLAVE, CASA, AÑO, DESCRIPCION);
        CARD_CONTAINER.append(CARD_INFO_CONTAINER, BOTON_VER_MAS);
        SHADOW.append(CARD_CONTAINER);
    }
}
customElements.define('hero-card', HeroCard);

const SEARCH_INPUT = document.querySelector('#buscar');
const CARDS = document.querySelectorAll('hero-card');

function filtrarTarjetas() {
    const FILTRO = SEARCH_INPUT.value.toLowerCase();
    CARDS.forEach(card => {
        const NOMBRE = card.shadowRoot.querySelector('#card-title').innerText.toLowerCase();
        if (NOMBRE.includes(FILTRO)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

SEARCH_INPUT.addEventListener('input', filtrarTarjetas);