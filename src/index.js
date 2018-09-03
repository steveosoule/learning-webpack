import { file, parse } from './globals.js';

function component() {
	var element = document.createElement('div');

	console.log(file);
	parse();

	element.innerHTML = join(['Hello', 'webpack'], ' ');

	return element;
}

document.body.appendChild(component());