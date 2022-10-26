let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
]


function mainTitle (str) {
  document.getElementById ('main-title').innerHTML = str
  
}

mainTitle ('Doms Garage')

function changeColor (color) {
  document.body.style.backgroundColor = color
}

changeColor ('white')

function lastChild () {
  const lastFav = document.getElementById ('favorite-things')
  lastFav.removeChild (lastFav.lastElementChild)
}

lastChild ()

function changeFont (size) {
  document.querySelectorAll ('.special-title').forEach ((title) => {
    title.style.fontSize = size
  })
}

changeFont ('2rem')

function removeCity (str) {
  let pastRace = document.querySelectorAll ('#past-races > li')
  for (let i = 0; i < pastRace.length; i++) {
    if (pastRace[i].innerHTML === str) {
      pastRace[i].parentNode.removeChild(pastRace[i])
    }
  }
}

removeCity ('Chicago')

function addCity (city) {
  let newCity = document.createElement ('li')
  newCity.textContent = city 
  document.getElementById ('past-races').append (newCity)
}

addCity ('NYC')


function blogPost (city, str) {
  let newDiv = document.createElement ('div')
  let newH1 = document.createElement ('h1')
  let newP = document.createElement ('p')
  newDiv.classList.add ('blog-post', 'purple')
  newH1.textContent = city
  newP.textContent = str
  newDiv.append (newH1, newP)
  document.querySelector ('.main').append (newDiv)
}

blogPost ('NYC', 'I"ve raced through all the borughs.')


const randomQuote = function () {
  document.querySelector ('#quote-of-the-day').innerText = `${quotes[Math.floor(Math.random() * quotes.length)]}`
}

function nQuote (newQ) {
  const pickQuote = document.querySelector (newQ)
  pickQuote.addEventListener(
    "click",
    function () {
      randomQuote();
    },
    randomQuote()
  )
  }
  nQuote('#quote-title')


// Even though I had help I dont really understand this last part

//   function nEvt (uff, color) {
//     let blogPost = document.querySelectorAll(uff);

// blogPost.forEach(function (post) {
//   console.log(post)
//   post.addEventListener("mouseout", function () {
//     post.classList.toggle(color)
//   })

//   post.addEventListener('mouseenter', function() {
//     post.classList.toggle(color)
//   })
// })
// }

// mouseOver(".blog-post", "red")