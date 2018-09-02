import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';

function component() {
  let element = document.createElement('div');
  element.innerHTML = _.join(['hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  let myIcon = new Image();
  myIcon.src = Icon;
  myIcon.width = 500;
  element.appendChild(myIcon);

  console.log(Data);

  return element;
}

document.body.appendChild(component());