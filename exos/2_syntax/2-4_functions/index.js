'use strict';
console.log('Exos 2-4');

/**========================================================================
 *                           Bonjour
 *========================================================================**/
console.log('*** Bonjour ***');

/**
 * 1) Créer une fonction 'direBonjour' qui:
 * - prend un 'nom' en entrée
 * - renvoie une chaine de caractère de type Bonjour personnalisé (ex: Bonjour Romain).
 *
 * 2) Utiliser cette fonction avec votre prénom en logguant son résultat
 */

/**========================================================================
 *                           Pourcentage
 *========================================================================**/
console.log('*** Pourcentage ***');

/**
 * 1) Créez une fonction "calculer" qui:
 * - prend un nombre en entrée
 * - renvoie ce nombre augmenté de 13%
 *
 * 2) Utilisez cette fonction sur un nombre de votre choix,
 * et afficher son résultat dans la console
 */

/**
 * 3) Modifier la fonction "calculer" pour pouvoir choisir également le pourcentage appliqué
 */

/**========================================================================
 *                           Aléatoire
 *========================================================================**/
console.log('*** Aléatoire ***');

/**
 * 1) Créer une fonction 'lanceDés' qui renvoie un nombre entre 1 et 6.
 *
 * Utiliser
 * - Math.random() (donne un nombre aléatoire >= 0 et < 1)
 * - Math.floor() (tronque le nombre qu'on lui fournit)
 *
 *
 * 2) Utiliser cette fonction pour obtenir un nombre aléatoire entre 1 et 6
 */

/**
 * 3) Modifier la fonction "lanceDés" pour pouvoir choisir la taille du dé (limites inférieures et supérieures)
 */

/**========================================================================
 *                           [Bonus] Limite
 *========================================================================**/
console.log('*** [Bonus] Limite ***');

/**
 * 1) Créer une fonction 'limit' qui:
 * - prend en entrée un nombre de départ
 * - calcule le nombre d'opérations nécessaires pour se rapprocher le plus possible de 1 / 1_000_000,
 * sans être plus petit (utiliser une boucle while)
 * - renvoie le nombre calculé
 */

/**
 * 2) Modifier cette fonction pour pouvoir fournir en entrée:
 * - la limite
 * - la tolérance
 */

/**
 * 3) Modifier la fonction "limit" pour faire la même chose sans aucune boucle.
 */

/**========================================================================
 *                           [Bonus] Mot de passe
 *========================================================================**/
console.log('*** [BONUS] Mot de passe ***');

/**
 * 1) En utilisant la fonction "lanceDés", créez une fonction `getLetter`
 * qui renvoie une lettre aléatoire parmi les lettres de l'alphabet.
 * Vous pouvez utiliser la string "letters".
 */

const letters = 'abcdefghijklmnopqrstuvwxyz';

/**
 * 2) Créez une fonction "makePassword" qui:
 * - en entrée prend un nombre 'size'
 * - renvoie un string de longueur 'size' construite avec des lettres au hasard
 *
 * Utiliser une boucle for et la fonction "getLetter".
 */

/**
 * 3) Créer une fonction 'makeStrongerPassword' qui:
 * - en entrée prend un nombre 'size' et un booléen 'withNumbers'
 * - renvoie une chaine de caractères avec des lettres aléatoires, selon les règles suivantes.
 *
 * Si 'withNumber' est vrai, faire en sorte qu'un caractère sur deux soit un nombre au hasard.
 * Si 'size' est plus petit que 8, logguer un message d'avertissement, mais créer le password quand même.
 */
