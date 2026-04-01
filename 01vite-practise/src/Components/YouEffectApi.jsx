import React, { useEffect, useState } from 'react'

function YouEffectApi() {
    const [data, setData] = useState()

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((json) => setData(json))
        .catch((err) => console.log("Error Found"))
    }, [])

    console.log(data);
    
  return (
    <>
      {!data ? (
        <p>Loading...</p>
      ) : (
        <div>{data[0].title}</div>
      )}
    </>
  )
}

export default YouEffectApi
