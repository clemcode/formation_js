# [Tableaux](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

> Créer et manipuler des groupes ordonnés de valeurs

Un tableau est une collection ordonnée de valeurs que l'on manipuler.

## Bases

```js
const nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const prenoms = ['Romain', 'Jeanne', 'Malik', 'Satsuki'];
```

Un tableau peut contenir des choses de types différents, mais c'est considéré comme une mauvaise pratique.

```js
const bordel = [1, 'Jeanne', true, () => {}, {}, []];
```

- on peut accéder à l'élément `n` d'un tableau avec `tableau[n-1]`
- sa longueur
est `tableau.length`
- on peut vérifier si un tableau contient un élément avec `tableau.includes(valeur)`

```js
const prenoms = ['Romain', 'Jeanne', 'Malik', 'Satsuki'];

prenoms[0]; // Romain
prenoms.length; // 4
prenoms[prenoms.length - 1]; // Satsuki

prenoms.includes('Malik'); // true
```

## Manipuler un tableau

### Ajouter dans un tableau

On peut ajouter un élément à un tableau avec
- `.push()`, pour le mettre à la fin
- `.unshift()`, pour le mettre au début

```js
const array = [1, 2, 3];

array.push(23); // [1, 2, 3, 23]
array.unshift(443); // [443, 1, 2, 3, 23]
```

### Supprimer dans un tableau

On peut supprimer un élément d'un tableau avec
- `.pop()`, pour l'enlever à la fin
- `.shift()`, pour l'enlever au début

On récupère alors l'élément supprimé.

```js
const array = [1, 2, 3];

const a = array.pop(); // a vaut 3, et array vaut [1, 2]
const b = array.shift(); // b vaut 1, et array vaut [2]
```

> Il est aussi possible d'ajouter ou supprimer à des positions précises dans le tableau, mais c'est un peu plus complexe.

### Trier

Il est possible de trier un tableau.

```js
const array = [7, 3, 6, 2];

array.sort(); // [2, 3, 6, 7]
```

**Attention**: le `.sort()` par défaut trie par ordre alphanumérique.

Dans tous les cas, que l'on ajoute ou supprime une valeur d'un tableau, la position du tableau dans l'univers n'a pas changé, même si son "contenu" a changé.

> `.sort()` permet aussi de trier des valeurs plus complexes que des simples nombres.

> Il existe plusieurs d'autres méthodes pour manipuler un tableau ou obtenir des infos sur un tableau.

### Aplatir

Parfois on a des tableaux imbriqués. On peut "aplatir" un tableau sur un niveau avec `.flat()`.

```js
const tableau = [[1, 2], 3, [4, 5]];
const tableauAplati = tableau.flat(); // [1, 2, 3, 4, 5]
```

> `.flat()` crée un nouveau tableau, et ne modifie pas le tableau d'origine.

## Itérer sur un tableau

Il y a plusieurs manières d'itérer sur un tableau.

```js
const array = [1, 2, 3];

// avec une boucle for classique
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// avec une boucle for...of
for (let element of array) {
  console.log(element);
}

// avec des méthodes fonctionelles
array.forEach(function (element) {
  console.log(element);
});
```

En termes de temps d'exécution, la boucle `for` classique sera la plus rapide. Mais elle est également très verbeuse et dure à maintenir.

En Javascript moderne, il est courant d'utiliser les méthodes fonctionnelles des tableaux pour itérer.

---

## À retenir

- Un tableau est une liste ordonnées de valeurs
- Les valeurs d'un même tableau peuvent être de types différents, même si ce n'est pas recommandé
- Un tableau commence à l'indice 0, l'élément `n` est accessible avec `array[n-1]`
- On peut modifier un tableau avec `.pop()`, `.push()`, `.shift()`, `.unshift()`, `.sort()`
- On peut itérer sur un tableau avec des boucles `for` ou `for of`

---

## Exos

- Ouvrir le dossier `/exos/2_syntax/2-5_arrays`
- Ouvrir le fichier `index.html` dans votre navigateur
- Suivre les indications du fichier `.js`, et vérifier les résultats dans
  votre navigateur

---

### _À suivre: [Quelques librairies standards](./2-6_libs.md)_
