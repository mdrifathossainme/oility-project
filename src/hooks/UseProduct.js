import React, { useEffect, useState } from 'react';


const UseProduct = () => {
    const [products, setProducts] = useState([])
    const url="http://localhost:5000/displayproducts"

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data=>setProducts(data))
    }, [products])
   
    
    return[products]

   
};

export default UseProduct;