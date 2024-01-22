import React, { createContext, useEffect, useState } from "react";
import axios from 'axios'
export const Store = createContext();
function StoreCompo(props){
    const [data,setData] = useState([])
    useEffect(()=>{
      const fetchData=async() =>{
        try{
          const response=await axios.get('http://localhost:4000/api/blog')
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