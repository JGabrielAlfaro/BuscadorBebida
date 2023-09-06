import {Col, Card, Button} from 'react-bootstrap'

import useBebidas from '../hooks/useBebidas'


const Bebida = ({bebida}) => {

    const {handleModalClick,handleBebidaIdClick} = useBebidas();

  return (
    <Col md={6} lg={3}>
      <Card className='mb-4'>
        <Card.Img
            variant='top'
            src={bebida.strDrinkThumb}
            alt={`Imagen de ${bebida.strDrinkThumb}`}
        />
      </Card>

      <Card.Body>
        <Card.Title>{bebida.strDrink}</Card.Title>
        {/* <Card.Text>Algo más</Card.Text> */}

        <Button
            variant='warning'
            className='w-100 text-uppercase mt-2'
            onClick={()=>{
                handleModalClick()
                handleBebidaIdClick(bebida.idDrink)
            }}
        >
            Ver receta
        </Button>
      </Card.Body>
    </Col>
  )
}

export default Bebida
