console.log ("i am connected");

// the function buildSubMenu
// Task 5.8

const buildSubMenu = (arr) => {

     subMenuEl.innerHTML= "";

    arr.forEach (index => {
      let b = document.createElement ("a"); 
      b.textContent = index.text ; 
      b.setAttribute ("href", index.href);
      subMenuEl.appendChild (b);
    })

}
//////////////////////

const mainEl = document.querySelector ("main");
console.log ("------->printing out main<--------- ");
console.log (mainEl);


mainEl.style.backgroundColor = "var(--main-bg)" ;

mainEl.innerHTML = "<h1> SEI Rocks !</h1>";

mainEl.classList.add("flex-ctr");


const topMenuEl = document.getElementById ("top-menu");
console.log ("------>printing out top menu<---------");
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
/*
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];*/

  var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

console.log ("--------->printing out all a tags<---------");
 menuLinks.forEach(menuLink => {
     let a = document.createElement ("a");
     a.setAttribute ("href",menuLink.href);
     a.textContent = menuLink.text ;
     
     console.log (a);
     topMenuEl.appendChild (a);

 }) 

 // Task 4.0 
 const subMenuEl = document.getElementById ("sub-menu") ; 
 console.log ("----------->printing out subMenuEl <--------");
 console.log (subMenuEl);

 // Task 4.1 
 subMenuEl.style.height = "100%" ;

 // Task  4.2
 subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
 
 // Task 4.3 
 subMenuEl.classList.add( "flex-around") ; 

 // Task 4.4
 subMenuEl.style.position = "absolute";

 // Task 4.5
 subMenuEl.style.top= 0;


 //  Task 5.1

const topMenuLinks = document.querySelectorAll ("a");
console.log ("---------->printing top menu link<-----------");
console.log (topMenuLinks );
console.log ("--------->done<---------");
let showingSubMenu = false ;

// Task 5.2 // Task 5.3 // Task 5.4  // Task 5.5 // Task 5.6 //  Task 5.7

topMenuEl.addEventListener("click",(evt)=>{

    evt.preventDefault();

    // the consdition if the link already has class active 

    if (evt.target.href) {
        console.log ("it is a link that will take you to  " + evt.target.text)
        if (evt.target.classList.contains("active")){
            console.log ("---->im inside the condition ");
            evt.target.classList.remove ("active");
            showingSubMenu = false;
            console.log ("bolean = " + showingSubMenu);
            subMenuEl.style.top = 0 ;
            return ;
        }  
        
        
    }
    else {console.log ("it's not a link ");
     subMenuEl.style.top = 0 ; 

     topMenuLinks.forEach(link => {
        link.classList.remove ("active");
    })
      return;
       }
     
    // removing class active  from every link  (top menulinks)

    topMenuLinks.forEach(link => {
        link.classList.remove ("active");
    })
   
    // adding class active to the clicked link 

    evt.target.classList.add ("active");
    
    // Task 5.6 
    
    
    let sublink = []; 

    if (evt.target.textContent !== "about") {

        

        showingSubMenu = true ; 
        console.log (evt.target.textContent);
        console.log ("bolean = " + showingSubMenu);

        

        if (evt.target.textContent === "catalog") {
          sublink = menuLinks[1].subLinks ; 
          console.log (sublink);
        } else if (evt.target.textContent === "orders") {
            sublink = menuLinks[2].subLinks ;
            console.log (sublink); 
        } else if (evt.target.textContent === "account") {
                 sublink = menuLinks[3].subLinks ;
                  console.log (sublink);}
    }  else if (evt.target.textContent === "about") {
        mainEl.innerHTML =  "<h1>about</h1>";
        showingSubMenu=false;

        }

     // Task 5.7

    if (showingSubMenu === true) {
        buildSubMenu (sublink);
        subMenuEl.style.top = "100%"; 
    }  else {
        subMenuEl.style.top = 0 ;
    }  
})


// Task 6.0  // Task 6.1 

subMenuEl.addEventListener ("click" ,(evt) => {
    evt.preventDefault ();
    
    if (evt.target.href) {
        console.log ("is a link ");
        console.log ("the element that was clicked is  "+evt.target.textContent);
        mainEl.innerHTML =  evt.target.textContent ;
        mainEl.style.fontSize = "35px";

        

    } else {
        console.log ("is not a link ");


        
    }

    
    showingSubMenu = false ; 
    subMenuEl.style.top =0 ; 

    topMenuLinks.forEach (link => {
        link.classList.remove ("active");
    })
     
    
   
    
    

})

 
 


