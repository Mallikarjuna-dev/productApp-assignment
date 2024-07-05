const ProdCard = ({ data }) => {

    const { name, price, prod_detail } = data

    return (
        <div className="h-full rounded-lg shadow hover:shadow-lg">
            <div className='p-4 text-left rounded-b-lg  flex flex-col  justify-between'>
                <h1 className='font-bold text-lg '>{name}</h1>
                <p className='text-gray-700'>₹ {price}</p>
                <h3 className='font-medium text-gray-600 '>{prod_detail}...</h3>
            </div>
        </div>
    )
}

export default ProdCard