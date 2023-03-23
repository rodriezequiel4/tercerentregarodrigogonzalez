const listaproductos =[
    {id:1, nombre:"mate imperial", precio:9500},
    {id:2, nombre:"mate camionero", precio:7500},
    ]
    const listacarrito=[]
    
    const contenedor_productos =document.getElementById("contenedor_productos")
    const contenedor_carrito =document.getElementById("contenedor_carrito")
    
    listaproductos.forEach(productos =>{
    contenedor_productos.innerHTML += `
    
    <div class="card" style="width: 18rem;">
    <img src="https://http2.mlstatic.com/D_NQ_NP_702437-MLA48733352973_012022-O.webp" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${productos.nombre}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary" id=matesimperial${productos.id}" >añadir al carrito</a>
    </div>
    </div>
    
    `
    
    })
    
    listaproductos.forEach(productos => {
    const producto_enespera = document.getElementById(`matesimperial${producto.id}`)
    
    producto_enespera.addEventListener("click",()=>{
        listacarrito.push(productos)
    
        listacarrito.forEach(productos=>{
    
    
            contenedor_carrito.innerHTML=""
    
            contenedor_carrito.innerHTML+=`<div class="card" style="width: 18rem;">
            <img src="https://http2.mlstatic.com/D_NQ_NP_702437-MLA48733352973_012022-O.webp" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${productos.nombre}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary" id=matesimperial${productos.id}" >añadir al carrito</a>
            </div>
            </div>`
        })
    })
    
    })