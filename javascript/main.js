

const listProducts = document.querySelector('.list-products');
const category = document.querySelector('.category');
const loading = document.querySelector('.loading');
const {products} = await import (`./list_products.js`);




  // listProducts.innerHTML = `<li>${products.map(item => item.title).join('')}</li>` 



 async function api(){

     loading.innerHTML =`<div class=""><img src="./img/loading-icon.svg"></div>`

     const response = await fetch(`https://fakestoreapi.com/products/category/men's clothing`);
     const data = await response.json();


      
     if(data){
         loading.style.display="none";
          listProducts.innerHTML = `${data.map((item) => {
            return(`
              <a class="card-product" href="./produto/${item.id}">
                <div>
                  <img src=${item.image} alt=${item.title}>
                </div>
                <h4>${item.title}</h4>
                <p>$ ${item.price.toFixed(2)}</p>
                
              </a>
            `)

          }).join('')}` 
     
         
      }else{
        listProducts.innerHTML = `${products.map((item) => {
          return(`
            <a class="card-product" href="./produto/${item.id}">
              <div>
                <img src=${item.image} alt=${item.title}>
              </div>
              <h4>${item.title}</h4>
              <p>$ ${item.price.toFixed(2)}</p>
              <button type="button"><img src="./img/cart-icon.svg">Add </button>
            </a>
          `)
      
        }).join('')}
        
        
        ` 


      }
     console.log(data);
 }






 


 try {
  api()
  console.log('We are exploring error handling with try/catch/finally');
} catch {
  console.log(e)
  
}finally{
  
  console.log('teste')
  // listProducts.innerHTML = `${products.map((item) => {
  //   return(`
  //     <a class="card-product" href="./produto/${item.id}">
  //       <div>
  //         <img src=${item.image} alt=${item.title}>
  //       </div>
  //       <h4>${item.title}</h4>
  //       <p>$ ${item.price.toFixed(2)}</p>
  //       <button type="button"><img src="./img/cart-icon.svg">Add </button>
  //     </a>
  //   `)

  // }).join('')}
  
  
  // ` 
}
 


 //https://fakestoreapi.com/products/category/men'sclothing