import axios from "axios";
import React, {useState, useEffect} from "react";



export const useRequestData = (url,headers) => {

  const [ data ,setData ] = useState([])
  const [ isloading , setIsloading] = useState(true)
  const [ dataError, setDataError] = useState([])

  useEffect( () => {
    setIsloading(true)
    axios
      .get(url,headers)
      .then( (response) => {
        setIsloading(false)
        setData(response.data)
      })
      .catch( (error) => {
        setIsloading(false)
        setDataError(error)
      })

  },[url])

  return [ data, isloading, dataError]
}