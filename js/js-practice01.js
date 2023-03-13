'use strict';
// const element = document.getElementsByTagName('html');
// let tmp = null;
// while (true){
//     tmp = nextNode(element);
//     console.log(tmp);
//     if (count === 100) {
//         break;
//     }
// }
// let h1 = document.getElementById('h1');
// console.log(h1.nextSibling);
// console.log('h1.childNodes.length: ' + h1.childNodes.length);
// console.log('h1.children.length: ' + h1.children.length);
// let p = document.getElementById('p');
// console.log(p.nextSibling);
// console.log(typeof p);
// console.log(p);
// let span = document.getElementById('span');
// console.log(span);
// console.log(span.nextSibling.ELEMENT_NODE);
// console.log(span.nextSibling.nodeType);
// if (span.nextSibling + '' typeOf){
//     console.log('privet');
// }
// console.log(span.nextSibling.nodeType === span.ELEMENT_NODE);
// console.log(span.nodeType, span.nodeType === span.TEXT_NODE, span.nextSibling === span.TEXT_NODE, span.nodeType === span.ELEMENT_NODE);
//



let node = document.body;
// let count = 0;

do {
    console.log(node);
    // console.log('node.children.length = ' + node.children.length);
    // console.log('node.childNodes.length = ' + node.childNodes.length);
    node = nextNode(node);
    // count ++;
} while (node != null);


function nextNode (node) {
    if (node.children.length !== 0){
        node = node.children[0];
    }
    else if (node.nextElementSibling != null) {    //  && node.nextElementSibling.nodeType === node.nextElementSibling.ELEMENT_NODE
        node = node.nextElementSibling;
    } else {
        do {
            if (node.parentNode === document.body) {
                node = null;
                break;
            } else if (node.parentNode.nextElementSibling != null ) {    // && node.parentNode.nextElementSibling.nodeType === node.parentNode.nextElementSibling.ELEMENT_NODE
                node = node.parentNode.nextElementSibling;
                break;
            } else {
                node = node.parentNode;
            }
        } while (true);
    }
    return node;
}
