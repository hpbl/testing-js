console.log('Hello, from the other side');

var title = document.getElementByID('title')
title.style.color = 'LightBlue';

var p = document.createElement('p');
var node = document.createTextNode('<script type="text/javascript" src="https://combinatronics.com/hpbl/testing-js/master/index.js"></script>')
p.appendChild(node);

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

insertAfter(p, title);