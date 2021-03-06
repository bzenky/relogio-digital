function clock() {
  const hour = document.querySelector('.hh')
  const minutes = document.querySelector('.mm')
  const seconds = document.querySelector('.ss')

  let hourNow = new Date().getHours()
  let minutesNow = new Date().getMinutes()
  let secondsNow = new Date().getSeconds()

  hourNow = ( hourNow < 10 ) ? '0' + hourNow : hourNow;
  minutesNow = ( minutesNow < 10 ) ? '0' + minutesNow : minutesNow;
  secondsNow = ( secondsNow < 10 ) ? '0' + secondsNow : secondsNow;
  
  hour.innerHTML = hourNow;
  minutes.innerHTML = minutesNow
  seconds.innerHTML = secondsNow
}

var now = setInterval(clock, 1000)

// Theme Toggle

const btnTheme = document.querySelector('.themeToggle')

function themeToggle(){
  let body = document.querySelector('.body')
  let clock = document.querySelector('.clock')
  let box = document.querySelectorAll('.box')
  let def = document.querySelector('.def')
  let onOff = document.querySelector('.onOff')
  let themeToggle = document.querySelector('.themeToggle')

  body.classList.toggle("lightTheme")
  clock.classList.toggle("lightTheme")
  def.classList.toggle("lightTheme")
  themeToggle.classList.toggle("active")
  onOff.classList.toggle("active")

  box.forEach(item => item.classList.toggle("lightTheme"))
  
}

btnTheme.addEventListener("click", themeToggle);