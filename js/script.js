/*
====================================

WXYZ
Designed by Eeha

====================================
*/


/* ---------------------------------
   Fade in sections
---------------------------------- */

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

sections.forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});



/* ---------------------------------
   Floating Object Card
---------------------------------- */

const objectCard = document.querySelector(".object-card");

if(objectCard){

let position = 0;

let direction = 1;

setInterval(()=>{

    position += direction * 0.3;

    if(position > 10) direction = -1;

    if(position < -10) direction = 1;

    objectCard.style.transform =
        `translateY(${position}px)`;

},40);

}



/* ---------------------------------
   Smooth Navigation
---------------------------------- */

const links = document.querySelectorAll("a");

links.forEach(link=>{

    link.addEventListener("mouseenter",()=>{

        link.style.opacity="0.45";

    });

    link.addEventListener("mouseleave",()=>{

        link.style.opacity="1";

    });

});



/* ---------------------------------
   Random Quote Rotation
---------------------------------- */

const quotes = [

"some objects don't ask to be understood.",

"this object was waiting for someone.",

"found somewhere between memory and nature.",

"perhaps it always existed.",

"not everything needs a purpose."

];

const quote = document.querySelector(".quote p");

if(quote){

setInterval(()=>{

    const random =
    Math.floor(Math.random()*quotes.length);

    quote.style.opacity="0";

    setTimeout(()=>{

        quote.textContent = quotes[random];

        quote.style.opacity=".45";

    },500);

},9000);

}



/* ---------------------------------
   Welcome
---------------------------------- */

console.log("Welcome to WXYZ.");
