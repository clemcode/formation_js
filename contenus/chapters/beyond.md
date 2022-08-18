# Aller plus loin

> Des pistes pour le futur

## [Les Promesses](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Using_promises)

On a rapidement évoqué les Promesses lors du chapitre sur l'asynchrone.

Une Promesse est un objet spécial qui permet de gérer l'asynchrone de manière fine.

## [Typescript](https://www.typescriptlang.org/)

Typescript est un langage qui se superpose à Javascript et lui rajoute un système de typage puissant, comme ça se fait dans d'autres langages.

Utiliser Typescript requiert un peu de rigueur, mais permet d'éviter dès l'écriture du code certaines erreurs.

## [NPM](https://www.npmjs.com/)

NPM est une librairie en librairie en ligne référençant beaucoup de code open-source, dont chacun peut se servir en tant que modules.

Pour utiliser NPM, il vous faudra [initialiser un projet NPM](https://docs.npmjs.com/cli/v8/commands/npm-init).

## Les bundlers

Le développement web moderne s'appuie énormément sur le concept de "bundling", dont le principe est le suivant:

On "compile" tout le code en 1 seul (gros) fichier bien construit pour le charger dans le Html.

Pour mettre en place du bundling, il y a plusieurs alternatives disponibles.

- [`browserify`](http://browserify.org/)
- [`webpack`](https://webpack.js.org/)
- [`rollup`](https://rollupjs.org/guide/en)
- [`parcel`](https://parceljs.org/)

Ces outils nécessitent de travailler dans un environnement Node, puis de transformer le code Node en un code compatible navigateur.

Pour utiliser ces outils, il est donc nécessaire d'[installer Node](https://nodejs.org/en/) et un gestionnaire de paquets, [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/en/).

Toutes ces techniques sortent largement du cadre de ce cours, mais sont intéressantes à étudier si l'on veut aller plus loin dans le développement web avec Javascript.

## Javascript serveur

On a beaucoup mentionné NodeJS depuis le début, qui est un moyen d'utiliser Javascript sans navigateur, sur un serveur. On appelle ça un *runtime*.

Le premier *runtime* Javascript est donc [NodeJS](https://nodejs.org/fr/). Mais il en existe d'autres, tels que [Deno](https://deno.land/) ou [Bun](https://bun.sh/).


## Les frameworks front-end

Depuis le début des années 2010, le concept de framework front-end s'est popularisé, au point de devenir aujourd'hui un standard du développement front-end moderne.

Un framework est un cadre de travail qui se rajoute au-dessus de Javascript pour faciliter le développement d'interfaces web, notamment tout ce qui touche à la gestion du DOM.

Le framework le plus populaire aujourd'hui est [React](https://fr.reactjs.org/), mais [Vue](https://vuejs.org/) et [Svelte](https://svelte.dev/) ont également le vent en poupe.
