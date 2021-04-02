const menu = document.querySelector('.menu')
const menuMobile = document.querySelector('.navigation__mobile')

export default function init(){

  menu.addEventListener('click', () => {
    
    if(menuMobile.classList.value.includes('active-menu')){
      return menuMobile.classList.remove('active-menu')  
    }
    menuMobile.classList.add('active-menu') 
  })
}