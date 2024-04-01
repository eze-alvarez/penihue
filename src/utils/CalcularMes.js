export default function obtenerMesActual() {
    const meses = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
  
    const fechaActual = new Date();
    const mesActual = fechaActual.getMonth();
    const mes = meses[mesActual]
  
    return mes;
  }
  