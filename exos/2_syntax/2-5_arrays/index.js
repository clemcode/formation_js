'use strict';
console.log('Exos 2-5: Tableaux');

/**========================================================================
 *                           Ordre
 *========================================================================**/
console.log('*** Ordre ***');
const nombres = [4, 5, 1, 2, 3, 6];

/**
 * 1) Ordonnez le tableau 'nombres' sans utiliser .sort()
 * 2) Faire la même chose avec .sort()
 */

/**========================================================================
 *                           A7
 *========================================================================**/
console.log('*** A7 ***');

const speeds = [23, 12, 57, 178, 129, 434, 222, 1000, 59, 887, 134];

/**
 * 1) Logguez chacune des valeurs du tableau speeds dans la console avec une boucle for
 * 2) Faire de même avec une boucle .forEach()
 */

/**
 * 3) Créer une fonction 'moins5' qui en entrée prend un nombre et renvoie le nombre moins 5
 * 4) Changer la boucle de la question 3 pour corriger chaque vitesse avec la fonction 'moins5'.
 * Si le résultat est supérieur à 130, logguer 'Vous allez trop vite !'
 */

/**
 * 5) Créez un nouveau tableau avec les vitesses en miles.
 */

/**========================================================================
 *                           Conversions
 *========================================================================**/
console.log('*** Conversions ***');

/**
 * 1) Créez un nouveau tableau avec les vitesses en m/s, en utilisant une boucle for.
 * 2) Créez un nouveau tableau avec les vitesses en miles/h, en utilisant une boucle for of.
 * 3) Même chose pour créez un tableau avec les vitesses en noeuds, en utilisant .map().
 */
const kmHtoms = 1000 / 3600; // conversion de km/h à m/s
const milesToKm = 1.61; // 1 miles vaut 1.61 km
const ndTokmH = 1.852; // 1 noeud vaut 1.852 km/h

/**
 * 4) Créez une fonction pour transformer une vitesse en km/h en vitesse en noeud;
 * 5) Utilisez cette fonction pour simplifier la question 3)
 * 6) Créez un tableau filtré avec uniquement les vitesses en km/h supérieures à 130 km/h
 */

/**========================================================================
 *                           [Bonus] Pokemons
 *========================================================================**/
console.log('*** [Bonus] Pokemons ***');

/**
 * 1) Trouvez toutes les types uniques de Pokemons à partir du tableau de données pokemons
 */
import { pokemons } from '../../utils/index.js';
