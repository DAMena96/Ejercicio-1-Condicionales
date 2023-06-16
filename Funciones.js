let COLORES = ['ROJO', 'VERDE', 'AMARILLO'];
const semaforoImg = document.querySelector('#semaforo-img');

function semaforoLuz() {
  const color = COLORES.shift();
  console.log(color);
  COLORES.push(color);
  semaforoImg.src = getImageUrl(color);
  return color;
}

function getImageUrl(color) {
  switch (color) {
    case 'VERDE':
      return 'https://previews.123rf.com/images/unkreatives/unkreatives1212/unkreatives121200035/16784406-ilustraci%C3%B3n-de-un-sem%C3%A1foro-con-luz-verde-activado.jpg';
    case 'AMARILLO':
      return 'https://previews.123rf.com/images/dvarg/dvarg1405/dvarg140500500/28602264-sem%C3%A1foros-realistas-con-el-color-amarillo-y-luz-de-posici%C3%B3n-espere-la-se%C3%B1al-ilustraci%C3%B3n-sobre.jpg';
    case 'ROJO':
      return 'https://previews.123rf.com/images/savanno/savanno1702/savanno170200261/71663575-sem%C3%A1foros-luz-roja-encendida-ilustraci%C3%B3n-de-vector-aislado-sobre-fondo-blanco.jpg';
    default:
      return '';
  }
}

const intervalID = setInterval(semaforoLuz, 3500);
