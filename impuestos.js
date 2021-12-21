export class Impuesto {

    constructor (_monto_bruto_anual, _deducciones) {
        this.monto_bruto_anual = _monto_bruto_anual;
        this.deducciones = _deducciones;
    }

    get_monto_bruto_anual() {
            return this.monto_bruto_anual;
    } 
    
    get_deducciones() {
            return this.deducciones;
    } 

    set_monto_bruto_anual(nuevo_monto_bruto_anual) {
        this.monto_bruto_anual = nuevo_monto_bruto_anual;
    }

    set_deducciones(nuevo_deducciones) {
        this._deducciones = nuevo_deducciones;
    }
}
