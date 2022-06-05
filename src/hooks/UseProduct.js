import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';


const UseProduct = () => {
    const [products, setProducts] = useState([])
    const url = "http://localhost:5000/displayproducts"
    

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data=>setProducts(data))
    }, [])
   
    
    return[products,setProducts]

   
};

export default UseProduct;