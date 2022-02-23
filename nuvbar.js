function burgerMenu() {
   const burger = document.querySelector('.burger')
   const menu = document.querySelector('.menu')
   const body = document.querySelector('body')
   burger.addEventListener('click',() => {
      if(!menu.classList.contains('active')){
         menu.classList.add('active')
         burger.classList.add('active-burger')
         body.classList.add('locked')
      }
      else{
         menu.classList.remove('active')
         burger.classList.remove('active-burger')
         body.classList.remove('locked')
      }
   })
   // брейк
   window.addEventListener('resize', () =>{
      if (window.innerWidth > 991.98){
         menu.classList.remove('active')
         burger.classList.remove('active-burger')
         body.classList.remove('locked')
      }
   })
}
burgerMenu()

function fixedNav() {
   const nuv = document.querySelector('nav')

   const breakpoint = 1
   if (window.scrollY > breakpoint){
      nav.classList.add('fixed_nav')
   } else {
      nav.classList.remove('fixed_nav')
   }
}
window.addEventListener('scroll', fixedNav)