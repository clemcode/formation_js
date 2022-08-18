# [CSS](https://developer.mozilla.org/fr/docs/Web/CSS)

C'est le **maquillage** d'une page web.

## Sélecteurs CSS

```css
mon-selecteur-css {
  ma-regle: 'ma-valeur';
}
```

### Base

Tous les éléments d'un certain type

- `span`, `div`, `p`, `body`, `*`, etc.

L'élément avec l'id `tabs`

- `#tabs`

Tous les éléments avec la classe `azerty`

- `.azerty`

Les éléments avec un certain attribut

- `input[type="email"]`

### Composition

- `E, F`: E et F
- `E F`: les F contenus dans E
- `E > F` les F directement enfants de E

### [Pseudo-classes](https://developer.mozilla.org/fr/docs/Web/CSS/Pseudo-classes)

- `x:hover`, `x:visited`
- [n-ième élément](https://developer.mozilla.org/fr/docs/Web/CSS/:nth-child)
  - `x:nth-child(3)`

```css
ul li {
  background-color: white;
}
li:nth-child(2) div {
  background-color: grey;
}

button:hover {
  color: blue;
}

a:visited {
  color: yellow;
}
```

## [Box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model)

- `width`/`height`
- `padding`: marge interne
- `border`: bordure
- `margin`: marge externe

## Quelques règles CSS utiles

```css
p {
  /* relatives au texte */
  color: blue;
  font-size: 30px;
  font-style: italic;
  font-weight: bold;
  text-decoration: underline;

  /* relatives au bloc */
  width: 30rem;
  height: 30rem;
  padding: 30rem;
  padding-left: 30rem;
  padding-top: 10rem;
  padding-bottom: 10rem;
  margin: 30rem;
  margin-right: 30rem;
  cursor: pointer;
  background-color: grey;
  box-shadow: 5px 10px 4px 7px black;
}
```

## [La Cascade](https://developer.mozilla.org/fr/docs/Apprendre/CSS/Introduction_%C3%A0_CSS/La_cascade_et_l_h%C3%A9ritage)

Le style d'un document HTML est appliqué selon la logique d'une cascade.

Les éléments se positionnent les uns par rapport aux autres en fonction du `box-model` de chacun.

On peut jouer sur la cascade grâce à [`display`](https://developer.mozilla.org/fr/docs/Web/CSS/display) et [`position`](https://developer.mozilla.org/fr/docs/Web/CSS/position).


## [Unités](https://developer.mozilla.org/en-US/docs/Web/CSS/length#rem)

- `rem` ou `%`: unités relatives, pour les tailles dépendant des dimensions d'écran.

- `px` ou `pt`: unités absolues, pour ce qui ne dépend pas de l'écran (bordures par exemple)


## [Couleurs](https://fr.wikipedia.org/wiki/Couleur_du_Web)

- Hexadécimal: `#123456`

- RGB: `rgb(255, 33, 21);`

- [HSL](http://fr.wikipedia.org/wiki/Teinte_Saturation_Luminosit%C3%A9#Mod.C3.A8les_colorim.C3.A9triques): `hsl(204, 27%, 24%)`

### _À suivre: [Javascript](./0-3_javascript.md)_
