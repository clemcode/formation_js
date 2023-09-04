# La fenêtre

> l'outil d'affichage principal de tout navigateur

Tout navigateur, pour pouvoir afficher quoi que ce soit à l'utilisateur, a besoin d'une fenêtre.

Il est possible d'obtenir des informations sur chaque fenêtre d'un navigateur, ainsi que des les manipuler, et ce grâce à Javascript.


Dans tout navigateur, on a accès à l'objet [`window`](https://developer.mozilla.org/fr/docs/Web/API/Window).

## Propriétés intéressantes

```js
window.document // le DOM
window.console

window.localStorage
window.sessionStorage

window.name
window.fullScreen
window.innerWidth
window.innerHeight
window.scrollX // distance de scroll sur X
window.scrollY // distance de scroll sur Y

window.location // l'url actuelle
window.history // l'historique de navigation
window.locationbar // la barre d'adresse
window.menubar // la barre de menu

...
```

## Méthodes intéressantes

```js
window.open() // ouvre un nouvel onglet ou fenêtre
window.close() // ferme la fenêtre
window.stop() // arrête le chargement de la page

window.setInterval() // crée un intervalle de temps régulier
window.clearInterval() // annule un intervalle donné
window.setTimeout() // crée un décalage de temps
window.clearTimeout() // annule un décalage de temps donné

window.fetch() // récupère de la donnée sur le réseau
window.addEventListener() // ajoute un écouteur d'évènement sur la fenêtre
window.removeEventListener() // supprime un écouteur d'évènement sur la fenêtre

...
```

> Toutes ces propriétés et méthodes sont accessibles sans avoir à préciser `window.` devant.

---

## Exos
- Ouvrir le dossier `/exos/2_browser/2-1_window`
- Ouvrir le fichier `index.html` dans votre navigateur
- Suivre les indications du fichier `index.js`, et vérifier les résultats dans
  votre navigateur

---

### _À suivre: [Le DOM](./2-2_dom.md)_
