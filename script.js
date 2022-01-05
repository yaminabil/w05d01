console.log ("i am connected");

const mainEl = document.querySelector ("main");
console.log (mainEl);


mainEl.style.backgroundColor = "var(--main-bg)" ;

mainEl.innerHTML = "<h1> SEI Rocks !</h1>";

mainEl.classList.add("flex-ctr");


const topMenuEl = document.getElementById ("top-menu");
console.log (topMenuEl);


topMenuEl.style.height="100%";
topMenuEl.style.color = "black";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add ("flex-around");

/*
let b = document.createElement ("p");
let text = document.createTextNode ("my name is bilal");
b.appendChild(text);
b.title = "name";
b.href = "#";
document.body.appendChild (b);*/

// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];


  
 menuLinks.forEach(menuLink => {
     let a = document.createElement ("a");
     a.href = menuLink.href;
     a.textContent = menuLink.text ;
     topMenuEl.appendChild (a);

 }) 