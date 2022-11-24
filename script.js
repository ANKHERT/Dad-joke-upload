"use strict";

const jokeElement = document.querySelector('.joke');

const btn = document.querySelector('.btn');


btn.addEventListener('click', uploadJoke);


async function uploadJoke () {
   const config = {
     headers: {
      Accept: 'application/json'
     }
   }

  const res = await fetch('https://icanhazdadjoke.com', config);

  const data = await res.json();
  jokeElement.innerHTML = data.joke
}


