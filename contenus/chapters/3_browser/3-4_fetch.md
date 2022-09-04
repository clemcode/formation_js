# [Interagir avec le réseau](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API)

> Récupérer et envoyer des données sur internet

## Le concept d'asynchrone

Un code asynchrone permet les opérations asynchrones, qui prennent du temps sans
bloquer l'éxécution de la suite.

C'est une problématique fortement liée au réseau, et à ses fluctuations.

**Javascript donc été conçu pour permettre les opérations asynchrones.**

On peut lancer certaines opérations qui prennent un certain temps, souvent
indéfini, sans bloquer le reste du code.

```js
function rendMoiMonArgent() {
  setTimeout(() => {
    console.log("Tiens, ton argent", 200);
  }, 2); // ... au bout de 2 ans
}

rendMoiMonArgent();
console.log("J'ai besoin de mon argent"); // n'attend pas 2 ans
```

Il est bien important de comprendre que **"Asynchrone", "Parallèle" sont des
concepts différents** ! Javascript est single threadé, donc ne permet pas le
parallélisme.

## Comment reconnaître l'asynchrone ?

La plupart des fonctions en Javascript ne sont pas asynchrones. Certaines le sont, et c'est important de savoir les reconnaître. C'est un peu abstrait au début, mais avec ça vient avec l'expérience.

On en a déjà vu 2: `setTimeout()` et `setInterval()`.

```js
setTimeout(() => {
  console.log("Expecto patronum"); // est exécuté au bout de 1000 ms
}, 1000);

setInterval(() => {
  console.log("On arriiiiive quaaand ?"); // est exécuté toutes les 500 ms
}, 500); //
```

De manière générale, les fonctions asynchrones ont un lien avec:
- le temps
- le réseau
- la lecture et l'écriture de fichiers (important surtout pour NodeJS)

## `async` / `await`

Un des problèmes de travailler avec l'asynchrone est de pouvoir réagir à la fin d'une opération asynchrone, et d'en récupérer les éventuels résultats.

Ainsi, si on essaie de récupérer tel quel le résultat d'une fonction asynchrone, et d'en faire quelque chose, on risque d'avoir des surprises.

```js
const money = rendLArgent(); // on suppose que cette fonction est asynchrone
console.log('Money ?', money) // ??
```

Ici, `money` ne sera jamais l'argent que l'on attend.

D'ailleurs, le `console.log` s'exécute immédiatement, avant même que l'opération soit terminée. Aucune chance donc d'avoir l'argent à ce moment.

> `money` ici sera un objet spécial, que l'on appelle une *Promesse*. L'étude des Promesses sort du cadre de ce cours.


Pour pouvoir récupérer la valeur attendue, et en faire quelque chose de pertinent, **il faut donc attendre** en utilisant `async` / `await`.

**Pour attendre le fin d'une opération asynchrone, on peut utiliser `await`**.

```js
const money = await rendLArgent(); // en réalité on ne peut pas écrire directement await ici
```

MAIS...

**On ne peut utiliser `await` que dans une fonction déclarée avec le mot clé `async`**.

```js
async function waitForMoney() {
  const money = await rendLArgent();

  console.log('Money', money); // ici, on a bien l'argent attendu
}

waitForMoney();
```

> Bien penser à exécuter la fonction déclarée avec async

Dans l'exemple `waitForMoney` est donc également asynchrone, comme `rendLArgent`. Si on voulait aussi attendre la fin de `waitForMoney`, il faudrait de nouveau passer par `async` / `await`.

## Gestion des erreurs

Parfois, une opération asynchrone se passe mal.

Dans ce cas, on ne peut pas récupérer le résultat de l'opération, mais on peut réagir à l'erreur avec `try {} catch {}`.

```js
async function waitForMoney() {
  try {
    const money = await rendLArgent();

    console.log('Money', money); // ici, on a bien l'argent attendu
  }
  catch(error) {
    console.log('Erreur', error); // ici, on gère le problème
  }
}

waitForMoney();
```

## `fetch`

Ce qu'on a vu dans ce chapitre est valable aussi bien pour NodeJS (serveur) que pour le Javascript des navigateurs.

On va maintenant s'intéresser à **une API purement navigateur qui se sert du concept d'asynchrone: `fetch`**.

> Jusque récemment, NodeJS n'avait pas d'équivalent natif à `fetch`.

La fonction `fetch` permet d'envoyer des requêtes [HTTP](https://developer.mozilla.org/fr/docs/Web/HTTP) au réseau via le navigateur.

```js
fetch('https://www.lemonde.fr') // récupère la page d'accueil du Monde.fr
fetch('https://swapi.dev/api/people/1/') // récupère de la donnée sur Star Wars API
```

> Il est possible de fournir des options à `fetch`.

On peut utiliser `fetch` pour différentes raisons:
- récupérer le contenu d'une page web
- récupérer des données
- mettre à jour des données
- envoyer des messages

Bien sûr, **`fetch` est asynchrone**.

### Lire la réponse de `fetch`

`fetch()` nous renvoie une *réponse HTTP*, un objet complexe qui doit être lu correctement pour s'en servir. La donnée contenue dans une réponse HTTP se lit avec des méthodes qui sont également asynchrones:

- `response.text()` pour lire du texte simple
- `response.json()` pour lire du JSON

```js
async function getLeMonde() {
  const response = await fetch('https://www.lemonde.fr'); // réponse HTTP
  const pageContent = await response.text();

  console.log(pageContent);
}

getLeMonde();

async function getStarWarsData() {
  const response = await fetch('https://swapi.dev/api/people/1/'); // réponse HTTP
  const data = await response.json();

  console.log(data);
}

getStarWarsData();
```

---

## À retenir

- Une opération asynchrone ne bloque pas le reste du code
- Javascript permet l'asynchrone
- Pour attendre la fin d'une opération asynchrone, on peut utiliser `await`
- On ne utiliser `await` dans une fonction déclarée avec `async`
- `fetch` est une méthode asynchrone du navigateur qui permet d'interagir avec le réseau
- `fetch()` renvoie une réponse HTTP, dont on lit le contenu avec `.text()` ou `.json()`, qui sont aussi asynchrones

---

## Exercices

- Ouvrir le dossier `/exos/3_browser/3-4_fetch`
- Ouvrir le fichier `index.html` dans votre navigateur
- Suivre les indications du fichier `index.js`, et vérifier les résultats dans
  votre navigateur

### _À suivre: [Asynchrone](./3-5_modules.md)_
