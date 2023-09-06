import { createContext, useEffect, useState } from "react";
import axios from "axios";
const BebidaContext = createContext();


const BebidasProvider = ({children}) => {

  const [bebidas,setBebidas] = useState([])
  const [modal,setModal] = useState(false)

  const [bebidaId,setBebidaId] = useState(null)
  const [receta,setReceta] = useState({})
  const [cargando,setCargando] = useState(false)

  useEffect(() =>{
    setCargando(true)
    const obtenerReceta = async () => {
      if (!bebidaId) return

      try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`
        const {data} = await axios (url)
        // console.log(data.drinks[0])
        setReceta(data.drinks[0])

      } catch (error) {
        console.log(error)
      }finally {
        setCargando(false)
      }
    }
    obtenerReceta()
  },[bebidaId])

  const consultarBebida = async datos =>{
      try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`
        console.log(url)
        const {data} = await axios (url)
        setBebidas(data.drinks)
        // console.log(data.drinks)
      } catch (error) {
        console.log(error)
      }
  }

  const handleModalClick = () =>{
    setModal(!modal)
  }

  const handleBebidaIdClick = id => {
    setBebidaId(id)
  }


  return (
    <BebidaContext.Provider
        value={{
          consultarBebida,
          bebidas,
          handleModalClick,
          modal,
          handleBebidaIdClick,
          receta,
          cargando
        }}
    >
        {children}
    </BebidaContext.Provider>
  )
}

export {
    BebidasProvider
} 

export default BebidaContext;


