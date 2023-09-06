import { useContext } from "react";

import BebidaContext from "../context/BebidasProvider";

const useBebidas = () => {
  return useContext(BebidaContext)
}

export default useBebidas