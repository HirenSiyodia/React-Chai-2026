import axios, { all } from 'axios'
import React, { useState } from 'react'

const AxiosPost = () => {
    const userdata = {fName:'', lName:''}
    const[allData, setAllData] = useState(userdata)

    function handleChange(e){
        setAllData({...allData, [e.target.name]:e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/users', allData)
        .then((response) => {
            console.log(response);
        })
    }

  return (
    <>
        <label>First name:</label>
            <input type="text" name="fName" value={allData.fName} onChange={handleChange}/>
        <label>Last name:</label>
            <input type="text" name="lName" value={allData.lName} onChange={handleChange}/>
        <input type="submit" onClick={handleSubmit}/>
    </>
  )
}

export default AxiosPost
