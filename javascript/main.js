

const listProducts = document.querySelector('.list-products');



 async function api(){
     const response = await fetch('https://fakestoreapi.com/products');
     const data = await response.json();

     if(data){
         
       /*  listProducts.innerHTML = `<li>${data.map(item => item.title).join('')}</li>` */
         
     }
     console.log(data);
 }


 api()



