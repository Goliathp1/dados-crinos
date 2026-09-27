// Comprueba dados.js contra la imagen de la tabla, fila a fila: node check.mjs
// Letras: r=Fallo y, o=Fallo, y=Fallo pero, g=Éxito pero, d=Éxito, t=Éxito y.
// Columnas: Fácil, Normal, Moderado, Difícil, Imposible.
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert';

const codigo = readFileSync(new URL('dados.js', import.meta.url), 'utf8');
const { DIFICULTADES, RESULTADOS, resultado } = vm.runInNewContext(`${codigo};({ DIFICULTADES, RESULTADOS, resultado })`);

const FILAS = [
  [1, 1, 'rrrrr'], [2, 3, 'orrrr'], [4, 5, 'yrrrr'], [6, 10, 'gorrr'], [11, 15, 'gyorr'], [16, 20, 'gyoor'],
  [21, 25, 'gyooo'], [26, 30, 'ggyoo'], [31, 35, 'ggyoo'], [36, 40, 'ggyoo'], [41, 45, 'ggyyo'], [46, 50, 'ggyyo'],
  [51, 55, 'dggyy'], [56, 60, 'dggyy'], [61, 65, 'ddgyy'], [66, 70, 'ddgyy'], [71, 75, 'ddgyy'], [76, 80, 'dddgy'],
  [81, 85, 'tddgy'], [86, 90, 'ttdgy'], [91, 95, 'tttdy'], [96, 97, 'ttttg'], [98, 99, 'ttttd'], [100, 100, 'ttttt'],
];

let tiradas = 0;
for (const [desde, hasta, fila] of FILAS) {
  for (let n = desde; n <= hasta; n++, tiradas++) {
    Object.keys(DIFICULTADES).forEach((dif, c) =>
      assert.equal(resultado(dif, n), RESULTADOS['roygdt'.indexOf(fila[c])], `${dif} con ${n}`));
  }
}
assert.equal(tiradas, 100);
console.log('Tabla OK: las 100 tiradas en las 5 dificultades');
