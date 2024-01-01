import { useEffect, useState } from "react"
import { Link, Outlet } from "react-router-dom"
import "./counties.css"

export default function Countries() {
    const url = "https://restcountries.com/v3/all"
    const [countries, setCounties] = useState([])

    const fetchapi = async(apiUrl) => {
        const respone = await fetch(apiUrl)
        const data =  await respone.json()
        setCounties([...data])
    }

    useEffect(() => {
        fetchapi(url)
    },[])

  return (
    <div>
        <h1>Countries</h1>
        <div style={{display: "flex", flexWrap:"wrap"}}>
            <div style={{width:"50%"}}>
                <ul id="container">
                    {
                        countries.length > 0 && countries.map((eachitem) => {
                            return(
                                <li key={Math.random()}>
                                    <h4>{eachitem.name.common}</h4>
                                    <img src={eachitem.flags[0]} alt={eachitem.name.common}/>
                                    <Link to={"countries/countiesDetails/"+eachitem.name.common}>Read More</Link>
                                </li>
                            )
                        }) 
                    }
                </ul>
            </div>
            <div style={{width:"50%"}}>
                    <h1>details</h1>
                    <Outlet/>
            </div>
        </div>
       
    </div>
  )
}
