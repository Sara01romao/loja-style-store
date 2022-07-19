const closeCart = document.querySelector('.close-cart');
const openCart = document.querySelector('.open-Cart');
const cartMenu = document.querySelector('.cartMenu');

closeCart.addEventListener('click', ()=>{
   
    cartMenu.classList.remove('open');

})

openCart.addEventListener('click',()=>{
    
    cartMenu.classList.add('open');
})


