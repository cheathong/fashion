const product = [
    {
        title :'TMNT Shell-Toe Shoes',
        price:23.5,
        category: 'Shoes',
        image:'tmnt-shell-toe-shoes.avif'

    },
    {
        title :'athletics-los-angeles',
        price:55.5,
        category: 'Shoes',
        image:'fear-of-god-athletics-los-angeles.avif'

    },
    {
        title :'gazelle-indoor-shoes',
        price:23.5,
        category: 'Shoes',
        image:'gazelle-indoor-shoes.avif'

    }
    ,
    {
        title :'rivalry-low-nice-kicks-shoes',
        price:33.5,
        category: 'Shoes',
        image:'rivalry-low-nice-kicks-shoes.avif'

    }
    ,
    {
        title :'athletics-i-basketball',
        price:85.5,
        category: 'Shoes',
        image:'fear-of-god-athletics-i-basketball.avif'

    },
    {
        title :'campus-00s',
        price:59,
        category: 'Shoes',
        image:'campus-00s.avif'

    }
    ,
    {
        title :'phase-shoes',
        price:130,
        category: 'Shoes',
        image:'x_plr-phase-shoes.avif'

    },
    {
        title :'Superstar_Shoes_White',
        price:200.5,
        category: 'Shoes',
        image:'Superstar_Shoes_White_EG4958_01_standard.avif'

    }


];
console.log(product);

var data ='';

for(var i=0; i< product.length;i++){
    data += `
    <div class="shoes">
            <div class="image">
              <img
                src="assets/Images/Man Sneakers/${product[i].image}"
                alt=""
                width="100%"
                height="100%"
              />
            </div>

            <div class="text-center">
            <div class="title">${product[i].title}</div>
            <div class=" description">${product[i].category}</div>

            <div class="price">${product[i].price}</div>
        
          
            <button class="btn btn-outline-success"> Checkout <i class="bi bi-bag-check"></i></button>
            </div>
          </div> 
    
    `;
}

document.getElementById('show').innerHTML=data;