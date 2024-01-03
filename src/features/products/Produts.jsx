import React from 'react'
import { useGetAllProductsQuery } from '../../services/products'
import { Link } from 'react-router-dom'

function Produts() {
    const {data, isLoading} =useGetAllProductsQuery()
    console.log(data)
  return (
    <div>
        <h1>Produts</h1>
        {isLoading ? <h3>loading...</h3> : (
            <ul className='grid'>
                {
                    data && data.map((p) => {
                        return(
                            <li key={p.id}>
                                <img src={p.image} alt='img' width="100px"/>
                                <h4>{p.title}</h4>
                                <Link to={`/productDetails/${p.id}`}>read more</Link>
                            </li>
                        )
                    })
                }
            </ul>
        )}
    </div>
  )
}

export default Produts