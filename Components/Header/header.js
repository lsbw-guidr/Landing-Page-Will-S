

const searchClick = document.querySelectorAll('.search-bar')

searchClick.forEach(element => {
   element.addEventListener('mouseup', event => {
      event.target.style.color = "black";
      event.target.style.backgroundColor = "white";
   })
});