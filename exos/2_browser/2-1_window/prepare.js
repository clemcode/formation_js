'use strict';

const divs = Array.from({ length: 1000 }).map((_, index) => {
  const div = document.createElement('div');
  div.textContent = index;
  div.id = index;
  return div;
});

document.body.append(...divs);
