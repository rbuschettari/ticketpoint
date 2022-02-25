//Scope General

fetch('./data.json')
    .then((res) => res.json())
    .then((shows) => {

        let codigoUno = shows.find(nombre => nombre.id == 1);
        let codigoDos = shows.find(nombre => nombre.id == 2);
        let codigoTres = shows.find(nombre => nombre.id == 3);
        let codigoCuatro = shows.find(nombre => nombre.id == 4);
        let codigoCinco = shows.find(nombre => nombre.id == 5);
        let codigoSeis = shows.find(nombre => nombre.id == 6);
        let codigoSiete = shows.find(nombre => nombre.id == 7);
        let codigoOcho = shows.find(nombre => nombre.id == 8);
        let codigoNueve = shows.find(nombre => nombre.id == 9);

        let botonCarritoUno = document.getElementById('botonCarritoUno');
        botonCarritoUno.setAttribute('data-id', codigoUno.id)
        botonCarritoUno.addEventListener('click', agregarAlCarrito);

        let botonCarritoDos = document.getElementById('botonCarritoDos');
        botonCarritoDos.setAttribute('data-id', codigoDos.id)
        botonCarritoDos.addEventListener('click', agregarAlCarrito);

        let botonCarritoTres = document.getElementById('botonCarritoTres');
        botonCarritoTres.setAttribute('data-id', codigoTres.id)
        botonCarritoTres.addEventListener('click', agregarAlCarrito);

        let botonCarritoCuatro = document.getElementById('botonCarritoCuatro');
        botonCarritoCuatro.setAttribute('data-id', codigoCuatro.id)
        botonCarritoCuatro.addEventListener('click', agregarAlCarrito);

        let botonCarritoCinco = document.getElementById('botonCarritoCinco');
        botonCarritoCinco.setAttribute('data-id', codigoCinco.id)
        botonCarritoCinco.addEventListener('click', agregarAlCarrito);

        let botonCarritoSeis = document.getElementById('botonCarritoSeis');
        botonCarritoSeis.setAttribute('data-id', codigoSeis.id)
        botonCarritoSeis.addEventListener('click', agregarAlCarrito);

        let botonCarritoSiete = document.getElementById('botonCarritoSiete');
        botonCarritoSiete.setAttribute('data-id', codigoSiete.id)
        botonCarritoSiete.addEventListener('click', agregarAlCarrito);

        let botonCarritoOcho = document.getElementById('botonCarritoOcho');
        botonCarritoOcho.setAttribute('data-id', codigoOcho.id)
        botonCarritoOcho.addEventListener('click', agregarAlCarrito);

        let botonCarritoNueve = document.getElementById('botonCarritoNueve');
        botonCarritoNueve.setAttribute('data-id', codigoNueve.id)
        botonCarritoNueve.addEventListener('click', agregarAlCarrito);



        
    })

// Carga los items previamente guardados en el local Storage

function cargarCarritoDelLocalStorage() {

    if (miLocalStorage.getItem('carrito') !== null) {
        carrito = JSON.parse(miLocalStorage.getItem('carrito'));

        carrito.forEach(item => {
            document.getElementById('checkOut').innerHTML = document.getElementById('checkOut').innerHTML + '<br />' + item;

        });
    }
}

let carrito = [];
let miLocalStorage = window.localStorage;
let checkOut = document.querySelector('#checkOut');

// Se le agrega a cada show su codigo de identificacion y el evento click para agregar al carrito








    // let codigoShows = shows.map((el) => el.id);

    // let botonCarrito = document.querySelectorAll('.botonCarrito');

    // botonCarrito.forEach(function (item) {
    //     item.setAttribute('data-id', codigoShows);
    //     item.addEventListener('click', agregarAlCarrito);
    // });




// Se genera la funcion para agregar los items al carrito

function agregarAlCarrito(evento) {
    carrito.push(evento.target.getAttribute('data-id'));

    guardarCarritoEnLocalStorage();
}

// Guarda los items en el Local Storage y los agrega al HTML

function guardarCarritoEnLocalStorage() {
    miLocalStorage.setItem('carrito', JSON.stringify(carrito));

    document.getElementById('checkOut').innerHTML = document.getElementById('checkOut').innerHTML + '<br />' + carrito;
}

// Formato de tarjetas para darle efecto al hacer mousemove

let efectoTarjetas = document.querySelectorAll('.tarjetas')

efectoTarjetas.forEach(tarjeta => {
    tarjeta.addEventListener('mousemove', (e) => {
        e.preventDefault();
        tarjeta.classList.add('tarjetasHover');
    })


});

function alerta() {

    Toastify({
        text: "Agregado al carrito",
        duration: 2000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () { }
    }).showToast();
}

//Inicia el programa

cargarCarritoDelLocalStorage();
