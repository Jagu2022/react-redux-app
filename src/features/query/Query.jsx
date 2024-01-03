import React from 'react'
import { useGetCountiesQuery } from '../../services/countries'

export default function Query() {
    const {data, isLoading} = useGetCountiesQuery()
    console.log(isLoading)
  return (
    <div>
        <h1>counties</h1>
        {isLoading ? <h3>loading...</h3> : (
            <ul>
            {
                data && data.map((eachitem) => {
                    return (
                        <li key={Math.random()}>
                            {eachitem.name.common}
                        </li>
                    )
                })
            }
        </ul>
        )}
        
    </div>
  )
}
