// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title =  123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < items.length; i++){
//   items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even= document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }

//start here


// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// // console.dir(document.head.style);
// console.log(document.all);
// document.all[10].textContent = 'hello';
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].style.backgroundColor = 'yellow';
// items[1].style.fontWeight = 'bold';

// let header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// let input = document.querySelector('input');
// input.value = 'Heloo';

// let submit = document.querySelector('input[type="submit"]');
// submit.value= 'sendf';

// let title = document.querySelectorAll('.title');

// title[0].textContent = 'hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');

// for(var i =0;i<odd.length ; i++)
// {
//     odd[i].style.backgroundColor = '#ccc';
// }

// var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// console.log(itemList.parentElement);

// // childnode
// console.log(itemList.childNodes);

// // children
// console.log(itemList.children);

// let newDiv = document.createElement('div');

// //add class

// newDiv.className = 'class';

// //add id

// newDiv.id = 'id';

// //add attribitue

// newDiv.setAttribute('title', 'titleee');

// //create text node

// let textnode = document.createTextNode('Hello jamy');

// //add text to div

// newDiv.appendChild(textnode);

// let container = document.querySelector('header .container');

// let h1 = document.querySelector('header h1');

// container.insertBefore(newDiv, h1);
// console.log(newDiv);


// let button = document.getElementById('button').addEventListener(
//     'click',buttonClick);

// function buttonClick(e)
// {
// //    document.getElementById('header-title').textContent = 'Changed';
// //  //   console.log(e);
// //  console.log(e.target);
// //  console.log(e.target.id);
// //  console.log(e.target.className);
// // //  console.log(e.target.classList);
// //  console.log(e.type);

// // //  mouse from tab
// //  console.log(e.clientX);
// //  console.log(e.clientY);

// //  // mouse from object
// //  console.log(e.offsetX);
// //  console.log(e.offsetY);
// console.log(e.altKey);
// }

// let button = document.getElementById('button');
// // button.addEventListener('mousedown',runEvent);
// // button.addEventListener('mouseup',runEvent);
// // button.addEventListener('mouseenter',runEvent);
// // button.addEventListener('mouseleave',runEvent);

// button.addEventListener('mouseover',runEvent);
// button.addEventListener('mouseout',runEvent);


var itemInput = document.querySelector('input[type="text"]');

// itemInput.addEventListener('focus',runEvent);
// itemInput.addEventListener('blur',runEvent);

itemInput.addEventListener('cut',runEvent);
itemInput.addEventListener('paste',runEvent);


function runEvent(e)
{
     console.log(e.type);
}