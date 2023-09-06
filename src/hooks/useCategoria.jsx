import { useContext } from "react";

import CategoriaContext from "../context/CategoriaProvider";

const useCategoria = () => {
  return useContext(CategoriaContext)
}

export default useCategoria
