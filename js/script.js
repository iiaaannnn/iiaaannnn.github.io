const button = document.getElementsByClassName('button')[0]
const navLinks = document.getElementsByClassName('navLinks')[0]

button.addEventListener('click', ()=>{
  navLinks.classList.toggle('active')
})