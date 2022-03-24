import React,{useState, useEffect} from 'react'
import Card from '../Card/Card'

const ListProducts = ({children}) => {
    const mockProductos = [{
        title : 'Fender Stratocaster',
        id: 1,
        color: 'Sunburst',
        price: 400,
        image: 'fender-1972-stratocaster.jpg',
        stock: 3,
    },
    {
        title : 'Fender Telecaster',
        id: 2,
        color: 'Red',
        price: 420,
        image: 'D_NQ_NP_633376-MLA31603427144_072019-O.jpg',
        stock: 4,
    },
    {
        title : 'Squier Stratocaster',
        id: 3,
        color: 'Black',
        price: 120,
        image: '76298940-squier1.jpg',
        stock: 6, 
    }
]

    const [products, setProducts] = useState([])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            return resolve(mockProductos)
        })
    } 

    useEffect( () => {
        getProducts().then( (productos) => {
            setProducts(productos)
        }).finally( () => {
            console.log("Termino la llamada")
        })
    }, [])


    return(
        <div className="container-cards">
            <h2> Productos en Oferta</h2>
            {products.map( ( product ) => {
                const {id} = product

                return(
                    <Card data={product} key={id}/>
                )
            })}
        </div>
    ) 
}

export default ListProducts;