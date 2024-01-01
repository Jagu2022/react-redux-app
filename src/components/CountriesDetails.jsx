import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./CountriesDetails.css"

function CountriesDetails() {
    const x = useParams()
    const [details, setDetails] = useState([])
    const url = `https://restcountries.com/v3/name/${x.cname}`

    const fetchapi = async(apiUrl) => {
        const respone = await fetch(apiUrl)
        const data =  await respone.json()
        setDetails([...data])
        
    }
    
    console.log(x)
    useEffect(() => {
        fetchapi(url)
    },[x.cname])

    console.log(details)

  return (
    <div>
        <h1>{x.cname} CountriesDetails</h1>
        {
            details && details.map((det) => {
                console.log(det.name.common)
                return (
                    <div className='cont' key={Math.random()}>
                        <div className='imgDev'>
                            <img src={det.flags[0]} alt='' width="100px"/>
                        </div>
                        <div className='details'>
                            <h3>{det.name.common}</h3>
                            <h3>population: {det.population}</h3>
                           {/*<h3>Capital: {del.capital[0]}</h3>*/}
                        </div>
                    </div>

                )
            })
        }
    </div>
  )
}

export default CountriesDetails