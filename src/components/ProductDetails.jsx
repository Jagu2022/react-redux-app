import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetAllProductsNameQuery } from '../services/products'

export default function ProductDetails() {
    const x = useParams()
    
     const {data, isLoading} = useGetAllProductsNameQuery(x.id)
    console.log(data)
  return (
    <div>
        <h1>productDetails</h1>
        {isLoading ? <h3>loading...</h3> : (
            <ul style={{margin:"10px"}}>
                <img src={data.image} alt='img' width="100px"/>
                <h4>{data.title}</h4> 
                <p>Price: <i>${data.price}</i></p>
                <p>Category: {data.category}</p>
                <p>Description: {data.description}</p>    
            </ul>
        )}
    </div>
  )
}
