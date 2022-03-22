export default function Card ({title, price, color}){
    return(
        <div className="card-item">
            <h2>{title}</h2>
            <p>Precio: {price}</p>
            <p>Color: {color}</p>
            <button> Comprar </button>
        </div>
    )
}