/* 
# Por: FsDk, Jose Antonio Gimenez http://www.eScripting.org
# 16/04/2022           
# Puedes modificar siempre que quieras el codigo lo publico como ejemplo  
# Pero en ningún momento quiero que quites estas lineas de créditos 
# espero que te pueda servir  y sea de tu agrado.
*/


const mostrarReloj = ()=> {
  let fecha = new Date();
  let hr = formatoHora(fecha.getHours());
  let min = formatoHora(fecha.getMinutes());
  let seg = formatoHora(fecha.getSeconds());
  document.getElementById('hora').innerHTML = `${hr}:${min}:${seg}`;
  const meses = ["Enero", "Febrero", "Marzo", "Abril",   "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  const dias = ["Domingo", "Lunes",  "Martes", "Miercoles",  "Jueves", "Viernes", "Sábado"];
  let diaSemana = dias[fecha.getDay()];
  let dia = fecha.getDate();
  let mes = meses[fecha.getMonth()];

  let fechaTexto = `${diaSemana}, ${dia} ${mes}`;
  document.getElementById("fecha").innerHTML = fechaTexto;

  // se agrega 1 animacion tipo interruptor con toggle y el css
  document.getElementById("contenedor").classList.toggle('animar');


}

const formatoHora = (hora)=>{
  if(hora < 10) 
        hora = `0${hora}`;
        return hora;
  }


setInterval(mostrarReloj, 1000);
