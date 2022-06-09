import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';


const UseProduct = () => {
    const [products, setProducts] = useState([])
    const url = "https://pacific-falls-37798.herokuapp.com/displayproducts"
    

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data=>setProducts(data))
    }, [])
   
    
    return[products,setProducts]

   
};

export default UseProduct;