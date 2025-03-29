//CUSTOM HOOK

import { useEffect, useState } from 'react'

function useCurrencyInfo(currency) {
    const [data , setdata] = useState({}); // default ek empty objct pass kr diye hai when we doesn't get value
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/520f83cc686e77ba4a9f16e0/latest/USD`)
        .then((res)=>res.json())
        .then((res)=> setdata(res[currency]))
        console.log(data)
    }, [currency])
    return data;
}

export default useCurrencyInfo;