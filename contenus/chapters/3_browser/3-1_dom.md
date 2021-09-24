# [DOM (Document Object Model)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

Une page HTML est un arbre grosso modo composé d'élements.

Le DOM est une API pour manipuler un document HTML ou XML (arbre). Souvent,
parlant de DOM, on désigne indifféremment l'arbre HTML ou l'API DOM.

[L'essentiel](https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model/Introduction#Interfaces_essentielles_du_DOM)

La plupart des entités du DOM sont des éléments.

## [Créer des éléments](https://developer.mozilla.org/fr/docs/Web/API/Document)

Le `document` n'est pas un élément, c'est un **noeud** spécial.

Il permet notamment d'accéder à l'élément `body`:
```js
document.body // renvoie le body
```

Il englobe tous les éléments de la page, permet de rechercher des
éléments, de les créer, de les ajouter à la page.

```js
const maDiv = document.createElement("div"); // crée une div orpheline

const myElement = document.getElementById("myId"); // renvoie l'élément qui a l'id 'myId'
const found = document.querySelector(selector); // renvoie le premier élément correspondant de la page
const founds = document.querySelectorAll(selector); // renvoie un iterateur avec tous les éléments de la page correspondant
```

## [Interagir avec l'arbre](https://developer.mozilla.org/fr/docs/Web/API/Node)

On peut obtenir obtenir des informations sur la position d'un élément dans l'arbre.

```js
element.children;
element.parentNode;
```

On peut également manipuler cette position:
```
parent.append(enfant);
element.remove();
element.replaceWith(element2);
```

Tant qu'un élément n'est pas "accroché" au `<body>`, (via éventuellement des éléments
intermédiaires), il ne sera pas affiché à l'écran.

## [Modifier un élément](https://developer.mozilla.org/en-US/docs/Web/API/element)

### Modifier les caractéristiques

```js
element.getAttribute(key);
element.getAttribute('href'); // si element est un <a>
element.setAttribute(key, value);
element.removeAttribute(key);
element.removeAttribute('hidden');

element.textContent = 'Blablabla...';
```

### Rechercher un élément enfant

```js
element.querySelector(selector);
element.querySelectorAll(selector);
```

### Jouer avec le style

```js
element.className; // ancien, à éviter
element.classList; // moderne, pour accéder aux styles
element.classList.add('maClasse');
element.classList.remove('maClasse');
element.classList.contains('maClasse');
element.classList.toggle('maClasse');

element.style.backgroundColor = ... // l'équivalent CSS est background-color
```

## [Écouter des évènements](https://developer.mozilla.org/fr/docs/Web/API/EventTarget)

On peut réagir aux évènements qui se produisent sur un élément grâce aux "écouteurs" d'évènements.

```js
element.addEventListener(type, listener); // si l'évèvement type se produit sur n, alors exécute listener, avec des options
element.removeEventListener(type, listener); // attention, comparaison par référence

// Exemple
monElement.addEventListener(
  "click",
  function () {
    console.log("yo");
  }
);
```

## À suivre: [Évènements](../3_browser/3-2_events.md)
