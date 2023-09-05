'use strict';
console.log('Exos 3-4: Formulaires');

/**========================================================================
 *                           Couleurs
 *========================================================================**/
console.log('*** Couleurs ***');

const form = document.getElementById('info');

form.addEventListener('submit', e => {
  e.preventDefault(); // permet d'éviter de le rechargement de la page
  const data = [...new FormData(form)]; // lit le contenu du formulaire

  const person = {}; // formattage de la donnée
  data.forEach(([key, value]) => {
    person[key] = value;
  });

  console.log(person);
  const name = document.createElement('div');
  const age = document.createElement('div');
  const article = document.createElement('article');
  name.textContent = person.name;
  age.textContent = person.age + ' ans';
  article.append(name, age);
  article.style.background = person.color;

  article.addEventListener('click', () => article.remove());

  document.body.append(article);
});

/**
 * 1) À la soumission du formulaire, construire une carte d'identité affichant:
 * - le nom
 * - l'âge
 * - la couleur de fond de la carte doit être la même que la couleur choisie
 *
 * Ajoutez cette carte dans la <section>
 */

// 2) Rendre l'âge optionnel, et conditionner l'affichage du texte correspondant

// 3) Supprimer le candidat lorsque l'on clique dessus
