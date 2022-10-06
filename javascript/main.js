

const listProducts = document.querySelector('.list-products');
const category = document.querySelector('.category')

const {products} = await import (`./list_products.js`);



  /*  listProducts.innerHTML = `<li>${products.map(item => item.title).join('')}</li>` */



 async function api(){

      listProducts.innerHTML =`<div class="loading"><img src="./img/loading-icon.svg"></div>`
     const response = await fetch('https://fakestoreapi.com/products');
     const data = await response.json();
      
     if(data){
         
          listProducts.innerHTML = `${data.map((item) => {
            return(`
              <div class="card-product">
                <div>
                  <img src=${item.image} alt=${item.title}>
                </div>
                <h4>${item.title}</h4>
                <p>$ ${item.price.toFixed(2)}</p>
                <button type="button"><img src="./img/cart-icon.svg">Add </button>
              </div>
            `)

          }).join('')}` 
     
         
     }
     console.log(data);
 }


 api()



