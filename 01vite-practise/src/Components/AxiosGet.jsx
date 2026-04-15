import React, { useEffect, useState } from 'react'
import axios from 'axios';

function AxiosGet() {
    const [useData, setdata] = useState([])
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=> {
            setdata(response.data)
        })
    },[])

  return (
    <div>
      {useData.map((data) => {
        return(
            <h3 key={data.id}>Name is {data.name}</h3>
        )
      })}
    </div>
  )
}

export default AxiosGet
