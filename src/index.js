function component() {
  let element = document.createElement('pre');
  element.innerHTML = [
    'Hello webpack!',
    'This is a message.'
  ].join('\n\n');

  return element;
}

document.body.appendChild(component());