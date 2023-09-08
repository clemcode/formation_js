# Encore des Promesses

> Gérer plusieurs Promesses en même temps

## Synchroniser

Si on a plusieurs Promesses, on peut se retrouver avec du code comme ça:

```js

const vp1 = await fetch("url1")
const vp2 = await fetch("url2")
```

Si jamais la requête vers `url2` dépend de `vp1`, alors il n'y a pas de réel problème.

Mais, souvent les 2 requêtes sont indépendantes, et on veut traiter les valeurs promises ensemble. Dans ce cas, le code plus haut n'est pas idéal, car on attend que le premier appel se termine pour commencer le 2e.

En réalité, on veut attendre en même temps, et **synchroniser** quand toutes les Promesses sont terminées.

Si on veut synchroniser plusieurs promesses, on peut utiliser

- `Promise.all()`, crée la promesse d'avoir **TOUTES** les promesses **résolues**

```js

const p1 = fetch("url1");
const p2 = fetch("url2");

const valeurs = Promise.all([p1, p2]); // valeurs vaut [vp1, vp2]
```

---

## À retenir

- utiliser plusieurs Promesses indépendantes peut amener à attendre pour rien
- pour éviter ça, on utilise `Promise.all()`

---

## Exercices

- Ouvrir le dossier `/exos/4_async/4-3_more`
- Ouvrir le fichier `index.html` dans votre navigateur
- Suivre les indications du fichier `index.js`, et vérifier les résultats dans votre navigateur

---

