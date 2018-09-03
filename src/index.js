import { cube } from './math.js';

function component() {
  let element = document.createElement('pre');
  element.innerHTML = [
    'Hello webpack!',
    '8 cubed is equal to ' + cube(8)
  ].join('\n\n');

  return element;
}

document.body.appendChild(component());