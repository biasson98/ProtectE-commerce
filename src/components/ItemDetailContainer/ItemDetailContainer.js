import { useState, useEffect } from "react";
import ItemDetail from '../ItemDetail/ItemDetail'
import mockProducto from '../utils/mockProducts'

const ItemDetailContainer = () => {
    const [dataProduct, setDataProduct] = useState({})

    const getProduct = () => {
        return new Promise((resolve, reject) => {
            return resolve(mockProducto)
        })
    }

    useEffect( () => {
        getProduct().then( (producto) => {
            setDataProduct(producto)
            //console.log("Llamada al mock:", producto)
        }).finally( () => {
            console.log("Termino la llamada")
        })
    }, [])

    return (
        <>
            
            <ItemDetail data={dataProduct}/>
        </>
    )
}

export default ItemDetailContainer