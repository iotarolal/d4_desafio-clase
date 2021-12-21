import {Cliente} from './clientes.js';
import {Impuesto} from './impuestos.js';


const _nombre = document.querySelector('.nombre');
const _montobrutoanual = document.querySelector('.monto_bruto_anual');        
const _deducciones = document.querySelector('.deducciones');        

$('#impuestos').on('submit', function(ev) {
        // primero evitamos que se recargue la página
        ev.preventDefault();

        // obtengo valoes ingresados por el usuario
        const _nombre = $('.nombre').val();
        const _montobrutoanual = $('.monto_bruto_anual').val();
        const _deducciones = $('.deducciones').val();

        // Craeo los objetos
        const _impto = new Impuesto(_montobrutoanual, _deducciones);    
        const _cliente = new Cliente(_nombre,_impto);

        // Muestro resultado
        $(".resultado").html(`${_cliente.calcularImptoTotal()}`);

});

