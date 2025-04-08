
const PostsApi = {
    /**
     * Fonction permetant d'appeler mon API post "./services/PostsApi.js"
     * @returns Liste de posts
     */
    getProducts: () => {
      
      return fetch("http://localhost:5000/products")
        .then((response) => response.json())
    },
    // getProducts: (query = "") => {
    //   const url = query
    // ? `http://localhost:5000/products?q=${searchQuery}` // Si un terme de recherche est passé
    // : "http://localhost:5000/products"; // Sinon, récupérer tous les produits

      
    //   return fetch(url)
    //     .then((response) => response.json())
    // },
  
    getProductById: (id) => {
      return fetch(`http://localhost:5000/products/${id}`)
        .then((response) => response.json())
    },
    
  addproduct: (data) => {
    return fetch('http://localhost:5000/products/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then((response) => response.json())
  },
  updateProduct:(id,data)=>{
    return fetch(`http://localhost:5000/products/${id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then((response) => response.json())

  },

deleteProduct: (product) => {
return fetch(`http://localhost:5000/products/${product}`, {
  method: 'DELETE',
  headers: { "content-type": "application/json" }
}).then(() => {
  console.log(`Post ${product} supprimé`)
}).catch((error) => {
  console.error(`Erreur lors de la suppression :`, error);
})
}
  }
  
  export default PostsApi
