// Se genera la funcion de compra y sus variables
function comprar() {
    let ingreso = ''
    let hiceElBreak = false;

    function Evento(id, nombre, fecha, valor) {
        this.id = id;
        this.nombre = nombre;
        this.fecha = fecha;
        this.valor = valor;

    }

//Se declara el array con los eventos
    let shows = [];

    shows.push(new Evento('1', 'Armin van Buuren', '24FEB', 8000));
    shows.push(new Evento('2', 'Argentina Open', '13FEB', 15000));
    shows.push(new Evento('3', 'Lit Killah', '18MAR', 3500));
    shows.push(new Evento('4', 'Solomun', '25MAR', 7500));
    shows.push(new Evento('5', 'WOS', '27ENE', 3500));
    shows.push(new Evento('6', 'Nicki Nicole', '27FEB', 3500));
    shows.push(new Evento('7', 'River-Velez', '05FEB', 2000));
    shows.push(new Evento('8', 'Lollapalooza', '18MAR', 25000));
    shows.push(new Evento('9', 'Emilia Mernes', '25MAR', 2500));

// Se genera nuevo array por nombre y se ordena alfabeticamente
    let nombres = shows.map((el) => el.nombre)

    nombres.sort((a, b) => {
        if (a.nombre > b.nombre) {
            return 1;
        }
        if (a.nombre < b.nombre) {
            return -1;
        }
        return 0;

    })

//Inicia el procesos de pedido al usuario
    alert('Estos son los eventos a la venta ' + nombres);

    while (ingreso != 'basta') {
        ingreso = prompt('Ingrese el evento');

        hiceElBreak = false
        for (let i = 0; i < nombres.length; i++) {

            if (ingreso == nombres[i]) {

                carrito.push(shows[i]);
                hiceElBreak = true;
                break;
            }

        }

        if (hiceElBreak == false && ingreso != 'basta') {

            alert('Ingrese evento correcto')
        }

    }
}

//Scope General

let carrito = [];
comprar();

if (carrito.length > 0) {
    let total = carrito.reduce((acc, el) => acc + el.valor, 0)
    alert('Su total es ' + total)

} else {
    alert('Hasta la proxima')
}
