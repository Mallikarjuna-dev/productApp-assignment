import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const ProdDetailPage = () => {
    const [SingleProduct, setSingleProduct] = useState(null)
    const { id } = useParams()
    let Data = useSelector(e => e.data)
    function SingleProductFind() {
        const Product = Data.find((e) => e.id === id)
        if (Product) {
            setSingleProduct(Product)
        } else {
            setSingleProduct(null)
        }
    }
    useEffect(() => {
        SingleProductFind()
    }, [])

    console.log(SingleProduct)

    return (
        <div>
            <h1>{SingleProduct?.title}</h1>
        </div>
    )
}
export default ProdDetailPage