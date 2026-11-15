function escribir(valor) {
  let pantalla = document.getElementById("pantalla");
  const Operador = ["+", "-", "*", "/"].includes(valor);

  if (pantalla.value == "Error") {
    pantalla.value = "0";
  }

  if (pantalla.value == "0" && !Operador && valor != ".") {
    pantalla.value = valor;
  } else {
    pantalla.value += valor;
  }
}

function calcular() {
  let pantalla = document.getElementById("pantalla");

  let operacion = pantalla.value.replace(/([+\-*\/]|^)0+(?=\d)/g, "$1");

  try {
    let resultado = eval(operacion);

    if (!isFinite(resultado)) {
      // Por ejemplo, dividir entre 0
      pantalla.value = "Error";
    } else {
      // Redondea para evitar cosas como 0.1+0.2 = 0.30000000000000004
      pantalla.value = Math.round(resultado * 1e10) / 1e10;
    }
  } catch (error) {
    pantalla.value = "Error";
  }
}

function borrar() {
  let pantalla = document.getElementById("pantalla");
  pantalla.value = "0";
}
