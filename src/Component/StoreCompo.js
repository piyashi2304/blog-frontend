import React, { createContext, useEffect, useState } from "react";
import axios from 'axios'
export const Store = createContext();
function StoreCompo(props){
    const [data,setData] = useState([])
    useEffect(()=>{
      const fetchData=async() =>{
        try{
          const response=await axios.get('https://backend-blog-ashen.vercel.app/')
          setData(response.data)
        }
        catch(error){
          console.error("error in fetching data",error)

        }
      }
      fetchData()

    },[])
    return(
        <>
        <Store.Provider value = {[data,setData]}>
            {props.children}
        </Store.Provider>
        </>
    )
}
export default StoreCompo