// !=============video 21========== Block Scope With let & const
// //* Global Scope
// var a = 1;
// let b = 2;
// const c = 3;
// console.log('Global Scope: ', a, b, c)//Global Scope:  1 2 3

// //* Function Scope
// function test() {
//   var a = 5;
//   let b = 6;
//   const c = 7;
//   console.log('Function Scope: ', a, b, c)
// }
// test();//Function Scope:  5 6 7  everything as it ment to be

// //* Block Scope (IF scope)
// if (true) {
//   var a = 5;
//   let b = 6;
//   const c = 7;
//   console.log('If Scope: ', a, b, c); //If Scope:  5 6 7
// }

// console.log('Global Scope: ', a, b, c)//?Global Scope:  5 2 3 - now our var value changed to 5. do not use val. only let or const

// //*loop

// for (let a = 0; a < 10; a++) {
//   console.log(`loop: ${a}`)
// }
// console.log('Global Scope: ', a, b, c)//Global Scope:  1 2 3 - everything is fine.

// for (var a = 0; a < 10; a++) {
//   console.log(`loop: ${a}`)
// }
// console.log('Global Scope: ', a, b, c)//?Global Scope:  10 2 3 - everything is fine. our global scope changes, use let and const only, do not use var


// !=============video 22========== What is The Dom?
//* Documbent object model
// 1) Tree of nodes/elements created by the browser 
// 2) javascript can be used to read / write / manipulate to the DOM
// 3) Object Oriented Representation.
// !=============video 23========== Examining The Document Object

// let val;
// val = document;
// val = document.all;
// val = document.all[0];// gives us opportunity to choose element by index
// val = document.all.length;// 43  number of elements in our document
// val = document.head; // shows our head
// val = document.footer;// undefined coz we dont have footer
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;


// val = document.forms;
// val = document.forms[0]// we can access our forms by index. 
// val = document.forms[1]//undefined coz we have only 1 form
// val = document.forms[0].id;//task-form is id of our form with index 0 
// val = document.forms[0].method//get - we use this method
// val = document.forms[0].action
// val = document.links;//gives us our links
// val = document.links[0]
// val = document.links[0].id;
// val = document.links[0].classList[0];

// val = document.images;
// val = document.scripts;
// val = document.scripts[2].getAttribute('src')//app.js

// //* 
// let scripts = document.scripts; // incorrect
// let scriptsArr = Array.from(scripts); // correct
// scriptsArr.forEach(function (script) {
//   console.log(script.getAttribute('src'));//gives us each atribute link
// })

// console.log(val);


// !=============video 24========== DOM Selectors For Single Elements
// //* document.getElementById()
// console.log(document.getElementById('task-title'));
// //* Get things from the element

// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);// we get name of class 

// //* change styling
// document.getElementById('task-title').style.background = 'yellow'// our task gonna change it bgc
// document.getElementById('task-title').style.color = '#fff'
// // document.getElementById('task-title').style.display = 'none'

// //*(change content)
// document.getElementById('task-title').textContent = 'Task List';//? we changing our title to Task List
// document.getElementById('task-title').innerText = 'My tasks';

// document.getElementById('task-title').innerHTML = '<span style="color:red">Span List</span>';// inserting HTML

// // * much better way to use it as variable
// const taskTitle = document.getElementById('task-title');
// taskTitle.innerHTML = '<span style="color:green">Span List</span>';// and now just use our const    taskTitle
//* document.querySelector()  - with this we can use basically any css selector
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.collection-item')); // if there is more then 1 selector on a page its jsut gonna get 1rst one.
console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = 'red';//? it only changes our first li, but we have 6 what to do?
document.querySelector('ul li').style.color = 'red';//? it only changes our first li, but we have 6 what to do?

document.querySelector('li:last-child').style.color = 'green';
document.querySelector('li:nth-child(3)').style.color = 'blue';
document.querySelector('li:nth-child(odd)').style.background = 'lightblue';//only works for 1rs 
document.querySelector('li:nth-child(even)').style.background = 'lightyellow';//only works for 1rs 
document.querySelector('li:nth-child(4)').textContent = 'Its 4';// we change our content in li 4

// !=============video 25==========
// !=============video 26==========
// !=============video 27==========
// !=============video 28==========
// !=============video 29==========
// !=============video 30==========
// !=============video 31==========
// !=============video 32==========
// !=============video 33==========