

const listMens = document.querySelector('.list-products.mens');
const listWomens = document.querySelector('.list-products.womens');
const category = document.querySelector('.category');
const loading = document.querySelector('.loading');
const {products} = await import (`./list_products.js`);






 async function api(){

     loading.innerHTML =`<div class=""><img src="./img/loading-icon.svg"></div>`

    try {

      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      
      const mensClothing = data.filter(item => item.category == "men's clothing")
      const womensClothing = data.filter(item => item.category == "women's clothing")
      
      

      loading.style.display="none";
      listMens.innerHTML = `${mensClothing.map((item) => {
        return(`
          <div class="card-product" >
            <div>
              <img src=${item.image} alt=${item.title}>
            </div>
            <h4>${item.title}</h4>
            <p>$ ${item.price.toFixed(2)}</p>

            <a href="./produto/${item.id}">Comprar</a>
            
          </div>
        `)

      }).join('')}` 


      listWomens.innerHTML = `${womensClothing.map((item) => {
        return(`
          <div class="card-product" >
            <div>
              <img src=${item.image} alt=${item.title}>
            </div>
            <h4>${item.title}</h4>
            <p>R$ ${item.price.toFixed(2)}</p>
            <a href="./produto/${item.id}">Comprar</a>
          </div>
        `)

      }).join('')}` 


    
      
    } catch (error) {

      loading.style.display="none";

      
      listProducts.innerHTML = `${products.map((item) => {
        return(`
          <a class="card-product" href="./produto/${item.id}">
            <div>
              <img src=${item.image} alt=${item.title}>
            </div>
            <h4>${item.title}</h4>
            <p>R$ ${item.price.toFixed(2)}</p>
            <button type="button"><img src="./img/cart-icon.svg">Add </button>
          </a>
        `)
    
      }).join('')}
      
      
      ` 
    }
     
 }


api()



 

 


 //https://fakestoreapi.com/products/category/men'sclothing
