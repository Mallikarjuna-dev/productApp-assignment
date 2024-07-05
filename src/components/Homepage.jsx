import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/Product/actions'
import ProdCard from './ProdCard'
import { Link } from 'react-router-dom'

const Homepage = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products.products)
  const Loading = useSelector((load) => (load.isLoading))

  useEffect(() => {
    dispatch(fetchProducts)
  }, [])

  console.log(products)
  return (
    Loading ? "Loading..." :
      <div className='py-4 px-6 border-sky-700 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        <div>products</div>
        {products?.map((e) => (
          <Link to={`/product/${e.id}`} key={e.id}>
            <ProdCard data={e} />
          </Link>
        ))}
      </div>
  )
}

export default Homepage


