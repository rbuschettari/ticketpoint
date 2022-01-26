function Evento(id, nombre, fecha) {
    this.id = id;
    this.nombre = nombre;
    this.fecha = fecha;

}

let shows = [];

shows.push(new Evento('1', 'Armin van Buuren', '24FEB'));
shows.push(new Evento('2', 'Argentina Open', '13FEB'));
shows.push(new Evento('3', 'Lit Kilah', '18MAR'));
shows.push(new Evento('4', 'Solomun', '25MAR'));
shows.push(new Evento('5', 'WOS', '27ENE'));
shows.push(new Evento('6', 'Nicki Nicole', '27FEB'));
shows.push(new Evento('7', 'River-Velez', '05FEB'));
shows.push(new Evento('8', 'Lollapalooza', '18MAR'));
shows.push(new Evento('9', 'Emilia Mernes', '25MAR'));
shows.push(new Evento('10', 'Duki', '25MAR'));

console.log(shows.length);

let popshows = shows.pop();

console.log(shows.length);

console.log(shows);

let eventos = prompt('Ingrese el evento por el cual desea conocer su precio y financiación: Wos, Solomun, Emilia');

if ((eventos == 'Wos') || (eventos == 'wos')) {
    alert('El precio es $3.500');
    function cuotas(valorCuotas) {
        let resultado1;
        if (valorCuotas == 3) {
            resultado1 = 3500 * 1.10 / valorCuotas;
            return resultado1;
        }
        else if (valorCuotas == 6) {
            resultado1 = 3500 * 1.15 / valorCuotas;
            return resultado1;
        }
        else if (valorCuotas == 12) {
            resultado1 = 3500 * 1.20 / valorCuotas;
            return resultado1;
        }
        else {
            alert('Ingrese valor correcto');
        }
    }
}

else if ((eventos == 'Solomun') || (eventos == 'solomun')) {
    alert('El precio es $7.500');
    function cuotas(valorCuotas) {
        let resultado2;
        if (valorCuotas == 3) {
            resultado2 = 7500 * 1.10 / valorCuotas;
            return resultado2;
        }
        else if (valorCuotas == 6) {
            resultado2 = 7500 * 1.15 / valorCuotas;
            return resultado2;
        }
        else if (valorCuotas == 12) {
            resultado2 = 7500 * 1.20 / valorCuotas;
            return resultado2;
        }
        else {
            alert('Ingrese valor correcto');
        }
    }
}

else if ((eventos == 'Emilia') || (eventos == 'emilia')) {
    alert('El precio es $2.500');
    function cuotas(valorCuotas) {
        let resultado3;
        if (valorCuotas == 3) {
            resultado3 = 2500 * 1.10 / valorCuotas;
            return resultado3;
        }
        else if (valorCuotas == 6) {
            resultado3 = 2500 * 1.15 / valorCuotas;
            return resultado3;
        }
        else if (valorCuotas == 12) {
            resultado3 = 2500 * 1.20 / valorCuotas;
            return resultado3;
        }
        else {
            alert('Ingrese valor correcto');
        }
    }
}
else {
    alert('Ingrese valor correcto')
}

let resultadoDeCuotas = cuotas((parseInt(prompt('Ingrese la cantidad de cuotas para saber su financiación: 3, 6, 12'))));

alert('El precio final a abonar por cuota es de ' + '$' + resultadoDeCuotas);




