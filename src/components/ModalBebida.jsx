import {Modal,Image, Button} from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'

const ModalBebida = () => {

    const {modal,handleModalClick,receta,cargando} = useBebidas();

    const mostrarIngredientes = () => {
      let ingredientes = [];
      for (let i=1 ; i < 16; i++){
        if (receta[`strIngredient${i}`]){
           ingredientes.push(
              <li key={i}>{receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}</li>
            )
        }
      }
      return ingredientes;
    }

  return (
    !cargando && (
          <Modal show={modal} onHide={handleModalClick}>
            <Image 
              src={receta.strDrinkThumb} 
              alt={`Imagen receta ${receta.strDrink}`}
            />
            <Modal.Header closeButton>
              <Modal.Title>{receta.strDrink}</Modal.Title>

              
            </Modal.Header>
              <Modal.Body>
                  <div className="p-3">
                    <h2>Intrucciones</h2>
                    {receta.strInstructions}
                  
                    <h2>Ingredientes y Cantidad</h2>
                    {mostrarIngredientes() }
                  </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary"
                onClick={()=>handleModalClick()}
                >Close</Button>
              </Modal.Footer>

          </Modal>
    )
  )
}

export default ModalBebida
