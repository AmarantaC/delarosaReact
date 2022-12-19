const product = {
    name: "Bulbasaur",
    detail: "Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
};
const Card= () => {
 
    return (
        <div className="card col col-6 col-md-3">
           <img src={product.img} className="card-img-top" alt={product.name}/>
           <div className="card-body mx-auto">
               <h5 className="card-title">{product.name}</h5>
               <p className="card-text">{product.detail}</p>
               <button onClick={saludar} className="btn btn-primary">Comprar</button>
           </div>
        </div>
    );
  };
  
export default Card;

function saludar() {
    alert("Hola");
}