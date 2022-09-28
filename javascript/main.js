

const listProducts = document.querySelector('.list-products');

const {products} = await import (`./list_products.js`);



  /*  listProducts.innerHTML = `<li>${products.map(item => item.title).join('')}</li>` */



 async function api(){
     const response = await fetch('https://fakestoreapi.com/products');
     const data = await response.json();

     if(data){
          listProducts.innerHTML = `${data.map((item) => {
            return(`
              <div class="card-product">
                <h4>${item.title}</h4>
                <img src=${item.image} alt=${item.title}>
              </div>
            `)

          }).join('')}` 
     
         
     }
     console.log(data);
 }


 api()



