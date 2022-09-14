# [Modules](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Modules)

> Découper efficacement son code

## Les `<script />`

On peut "importer" des scripts dans les HTML, via les balises `<script>`, soit en inline, soit en `<script src=... >`.

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="code1.js"></script>
    <script src="code2.js"></script>
    <script src="code3.js"></script>
    <script src="code4.js"></script>
    <script src="code5.js"></script>
    <script src="code6.js"></script>
  </head>
  <body></body>
</html>
```

### Effets sur le parser HTML

**Les `<script>` bloquent le parser HTML**, c'est-à-dire que la lecture de la page s'arrête pour chaque `<script>`, le temps de télécharger et d'exécuter chacun des `<script>`.

Il est courant de voir des `<script>` placés à la fin du `<body>`. Cette astuce sert à éviter le blocage du parser HTML, mais les `<script>` ne sont plus à leur place naturelle, c'est-à-dire dans le `<head>`.

Deux attributs sont intéressants pour éviter le blocage du parser, tout en laissant les `<script>` dans le `<head>`:

- `defer`
  - on retarde l'exécution pour attendre que toute la page soit lue
  - si plusieurs scripts avec `defer`, ordre d'exécution préservé
- `async`
  - exécuté dès que possible, dès la réception du fichier
  - si plusieurs scripts avec `async`, aucun ordre d'execution établi

---

## Dépendances explicites

Les différents morceaux de code d'une application dépendent les uns des autres. Mais en JavaScript, ces dépendances sont par défaut **implicites** si on se contente d'ajouter des `<script>`.

On souhaite rendre claires les relations entre fichiers, afin de savoir sans équivoque quel fichier nécessite quels autres fichiers.

On veut donc rendre les dépendances entre fichiers **explicites**.

## Modules ES6

Les modules sont des fichiers `.js` (ou `.mjs`) permettant d'utiliser les mots clés `import` et `export`. Ils servent à **découper proprement son code en gardant les dépendances de chaque fichier explicites**.

> Les modules ES6 sont également disponibles dans NodeJS depuis la version 13.2.0.

Quand on importe un module, on "récupère" ce que ce module exporte.

Le module "point d'entrée" n'exporte rien.

Les modules "feuilles" n'importent rien.

### [`export`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/export)

On peut exporter des valeurs, des objets, des fonctions...

```js
// export par défaut, n'a pas besoin de nom
export default { a: 1, b: 2 };

// marche aussi pour les fonctions
export default function () {
  console.log('Coucou');
}

export const maConst = 5; // export secondaire
```

### [`import`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/import)

On peut importer depuis un module natif ou installé, ou depuis les fichiers locaux du projet.

```js
// un module importe d'autres modules

import maFonction from './monFichierLocal'; // import local
import monModule from 'monModule'; // import externe

import { pikachu, charmander as salameche } from 'pokemons'; // on importe seulement "pikachu" et "charmander", que je renomme en "salameche"

console.log(pikachu);

import * as pokemons from 'pokemons'; // on importe tous les exports

console.log(pokemons.pikachu);

// ...
```

**Les modules sont par défaut en mode strict !**

### Utiliser un module

Pour pouvoir utiliser un script de type module dans le HTML, il faut l'insérer dans un `<script>` de type `"module"`.

Toutes les dépendances d'un script `"module"` seront directement importées en suivant l'arbre de dépendances construit avec les différents `import` et `export`.

**Lorsque l'on utilise les modules, il faut impérativement servir sa page depuis un serveur HTTP (et non depuis le protocole `file://`).**

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="code1.js" type="module"></script>
  </head>
  <body></body>
</html>
```


---

## À retenir

- Découper son code avec des simples `<script>` ne rend pas explicites les dépendances
- Les modules permettent de découper son code en rendant les dépendances explicites
- Pour importer quelque chose dans un module, on utilise `import`
- Pour exporter quelque chose d'un module, on utilise `export`
- Un export peut être défini comme celui par défault avec `export default` (un seul par module)
- On déclare un fichier comme module avec `<script src=... type="module">`

---

## Exercices

TODO

---

### _À suivre: [Vers l'infini et au delà](../beyond.md)_
