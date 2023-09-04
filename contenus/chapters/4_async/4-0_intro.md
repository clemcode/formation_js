# [Un jour peut-être](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API)

> Comprendre l'asynchrone

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

Mais comment faire si j'ai besoin du résultat d'une opération asynchrone ?

## Les Promesses

Les Promesses permettent de gérer les opérations asynchrones avec une certaine API.

Une fois définie, une Promesse peut avoir 3 états:

- **en attente**: on attend
- **résolue**: la promesse est tenue
- **rejetée**: la promesse est brisée

Une fois une Promesse résolue ou rejetée, elle ne peut plus changer d'état.

**La plupart du temps, les Promesses seront des appels au réseau pour récupérer de la donnée**. Elles se consomment avec `async`/`await`.

---

## À retenir

- Une opération asynchrone ne bloque pas le reste du code
- Javascript permet de faire de l'asynchrone
- Les opérations asynchrones sont souvent liées au temps, au réseau ou au fichiers
- Pour utiliser l'asynchrone, il faut utiliser des Promesses avec `async`/`await`

---

### _À suivre: [`async`/`await`](./4-1_async_await.md)_
