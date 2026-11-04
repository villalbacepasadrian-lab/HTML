

function juego(jugador) {
  const opciones = ["piedra", "papel", "tijera"];
  const maquina = opciones[Math.floor(Math.random() * opciones.length)];
  let mensaje;



  if (jugador == maquina) {
    mensaje = "Empate";


  }

  else if (
    (jugador == "piedra" && maquina == "tijera") ||
    (jugador == "tijera" && maquina == "papel") ||
    (jugador == "papel" && maquina == "piedra")
  ) {
    mensaje = "Ganas";
  }
 else {
  mensaje = "Pierdes";
 }



document.getElementById("mensaje").textContent = mensaje;

}
