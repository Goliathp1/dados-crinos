// Tabla del Club de Rol Crinos: tope de cada resultado en el d100, por dificultad.
// Orden: Fallo y, Fallo, Fallo pero, Éxito pero, Éxito. Lo que pase del último tope es Éxito y.
const DIFICULTADES = {
  'Fácil':     [1, 3, 5, 50, 80],
  'Normal':    [5, 10, 25, 60, 85],
  'Moderado':  [10, 25, 50, 75, 90],
  'Difícil':   [15, 40, 75, 90, 95],
  'Imposible': [20, 50, 95, 97, 99],
};

const RESULTADOS = [
  { nombre: 'Fallo y…',    texto: 'Fallas, y encima pasa algo malo',        fondo: '#d50000', tinta: '#fff' },
  { nombre: 'Fallo',       texto: 'Fallas, sin más',                        fondo: '#ff6d00', tinta: '#000' },
  { nombre: 'Fallo pero…', texto: 'Fallas, pero pasa algo bueno',           fondo: '#ffd600', tinta: '#000' },
  { nombre: 'Éxito pero…', texto: 'Lo consigues, pero pasa algo malo',      fondo: '#00c853', tinta: '#000' },
  { nombre: 'Éxito',       texto: 'Lo consigues',                           fondo: '#1b5e20', tinta: '#fff' },
  { nombre: 'Éxito y…',    texto: 'Lo consigues, y además pasa algo bueno', fondo: '#00838f', tinta: '#fff' },
];

function resultado(dificultad, tirada) {
  const i = DIFICULTADES[dificultad].findIndex((tope) => tirada <= tope);
  return RESULTADOS[i === -1 ? RESULTADOS.length - 1 : i];
}
