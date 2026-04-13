import React, { use, useMemo, useState } from 'react'

const YouMemoComplex = () => {
    const [add, setAdd] = useState(0)
    const [sub, setSub] = useState(99)

    const HeavyCal = useMemo(() => {
        console.log('Rendering');
        let result = 0;
        for(let i=0; i <= 100000; i++){
        result += 1;
        }
        return result;
    },[add])

  return (
    <>
    {HeavyCal}<br/>
        <button onClick={()=>setAdd(add+1)}>Click Here for add: {add}</button><br/>
        <button onClick={()=>setSub(sub-1)}>Click Here for add: {sub}</button><br/>
    </>
  )
}

export default YouMemoComplex
