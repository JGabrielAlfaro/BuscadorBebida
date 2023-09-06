import { createContext, useEffect, useState } from "react";
import axios from "axios";
const CategoriaContext = createContext();


const CategoriaProvider = ({children}) => {

  const [categorias,setCategorias] = useState([])

  const obtenerCategorias = async () =>{
      try {

        const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
        const {data} = await axios (url);
        setCategorias(data.drinks)

      } catch (error) {
        console.log(error)
      }
  }

  useEffect(()=>{
    obtenerCategorias();
  },[])

  return (
    <CategoriaContext.Provider
        value={{
          categorias
        }}
    >
        {children}
    </CategoriaContext.Provider>
  )
}

export {
    CategoriaProvider
} 

export default CategoriaContext;


