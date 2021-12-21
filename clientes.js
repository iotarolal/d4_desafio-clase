export class Cliente {
    // creo el constructor
    constructor (_nombre, impuesto) {
        this.nombre = _nombre;
        this.impuesto = impuesto;
    }
    
    get_nombre() {
        return this.nombre;
    } 
    
    get_impuesto() {
        return this.rut;
    } 
    
    set_nombre(nuevo_nombre) {
        this.nombre = nuevo_nombre;
    }

    set_impuesto(nuevo_impuesto) {
        this.impuesto = nuevo_impuesto;
    }

    // metodo calculo impuesto 
    calcularImptoTotal() {
        return ((this.impuesto.get_monto_bruto_anual() - this.impuesto.get_deducciones()) * 21/100);
    }
}
