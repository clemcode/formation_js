# [Formulaires](https://developer.mozilla.org/fr/docs/Learn/Forms)

> Obtenir de l'information du client

Les formulaires permettent aux personnes de rentrer de l'information.

Cette information est normalement envoyée à un serveur qui va la traiter. Mais il est également possible de la récupérer dans le navigateur grâce au DOM.

## HTML

Un formulaire en HTML se crée avec la balise `<form>`.

Dans un `<form>`, on peut mettre des inputs de différents types:
- `<input>`: texte, nombre, date, téléphone, checkboxes, radios...
- `<textarea>`: textes longs
- `<select>`: liste déroulante
- `<label>`: pour décrire un input
- `<button>`: pour envoyer le formulaire

```html
<form action="">
  <label for='name'>Nom</label>
  <input id='name'>

  <label for='age'>
  <input id='age' type='number'>

  <label>Couleur préférée</label>
  <label for="blue">Bleu</label>
  <input id="blue" name="color" type="radio" />
  <label for="red">Rouge</label>
  <input id="red" name="color" type="radio" />
  <label for="green">Vert</label>
  <input id="green" name="color" type="radio" />

  <button type="submit">Envoyer</button>
</form>
```

> Associer un `<label>` à un `<input>` avec `for` est préférable pour des raisons d'accessibilité.

> L'`action` d'un `<form>` sert à cibler si besoin une page sur un serveur permettant de traiter la donnée.

## Usage avec un serveur

**L'usage classique d'un formulaire est l'envoi de données à un serveur**, qui va traiter ces données, et décider d'une redirection éventuelle en fonction des données.

Par conséquent, par défaut, la soumission d'un formulaire implique le rechargement automatique de la page, et souvent, donc, une redirection imposée par le serveur.

Nous ne verrons pas ce cas dans cette formation.

## Usage côté client

**On peut également Récupérer la donnée d'un formulaire côté client** (dans le navigateur), mais demande un peu de travail.

On peut résumer ça en 3 étapes :
- empêcher le rechargement automatique de la page lors de la soumission du formulaire
- lire la donnée depuis le formulaire
- formatter la donnée pour la rendre plus facile à traiter

```js
const form = document.getElementById('mon-formulaire');

form.addEventListener('submit', e => {
  e.preventDefault(); // permet d'éviter de le rechargement de la page
  const data = [...new FormData(form)]; // lit le contenu du formulaire

  const formatted = {}; // formattage de la donnée
  data.forEach(([key, value]) => {
    formatted[key] = value;
  });

  console.log(formatted);
});
```

---

## À retenir

- les formulaires permettent d'envoyer de la donnée à un serveur
- il est possible également d'utiliser la donnée d'un formulaire dans le navigateur

---

## Exercices

- Ouvrir le dossier `/exos/2_browser/2-4_forms`
- Ouvrir le fichier `index.html` dans votre navigateur
- Suivre les indications du fichier `index.js`, et vérifier les résultats dans
  votre navigateur

---

### _À suivre: [Le modèle mental](../3_mental_models/3-1_introduction.md)_
