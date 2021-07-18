function clock() {
  const hour = document.querySelector('.hh')
  const minutes = document.querySelector('.mm')
  const seconds = document.querySelector('.ss')

  var hourNow = new Date().getHours()
  var minutesNow = new Date().getMinutes()
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
  var body = document.querySelector('.body')
  var clock = document.querySelector('.clock')
  var box = document.querySelectorAll('.box')
  var def = document.querySelector('.def')
  // console.log(box)
  

  body.classList.toggle("lightTheme")
  clock.classList.toggle("lightTheme")
  // box.classList.toggle("lightTheme")
  def.classList.toggle("lightTheme")

  box.forEach(item => item.classList.toggle("lightTheme"))
  
}

btnTheme.addEventListener("click", themeToggle);