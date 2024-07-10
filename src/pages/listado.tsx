import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Listado = () => {
    return (
        <>
            <h1>Pokemones Randoms</h1>

            <div className='content-wrapper'>
                <div className='content'>
                    <div className='row gap-3'>
                        <Card className='mx-auto' style={{ width: '18rem' }}>
                            <Card.Header>Tipo: Fantasma</Card.Header>
                            <Card.Img width="80" height="100" variant="top" className='mx-auto w-50' src="https://dthezntil550i.cloudfront.net/po/latest/po1807080447316790001907598/84d795ed-0b7f-4c64-a2a5-4a4d2c146045.png" />
                            <Card.Body>
                                <Card.Title className='text-center'>Pelotubbie</Card.Title>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>HP: ##</ListGroup.Item>
                                    <ListGroup.Item>Ataque: ##</ListGroup.Item>
                                    <ListGroup.Item>Defensa: ##</ListGroup.Item>
                                    <ListGroup.Item>E.Ataque: ##</ListGroup.Item>
                                    <ListGroup.Item>E.Defensa: ##</ListGroup.Item>
                                    <ListGroup.Item>Velocidad: ##</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                        <Card className='mx-auto' style={{ width: '18rem' }}>
                            <Card.Header>Tipo: Fantasma</Card.Header>
                            <Card.Img width="80" height="100" variant="top" className='mx-auto w-50' src="https://dthezntil550i.cloudfront.net/po/latest/po1807080447316790001907598/84d795ed-0b7f-4c64-a2a5-4a4d2c146045.png" />
                            <Card.Body>
                                <Card.Title className='text-center'>Pelotubbie</Card.Title>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>HP: ##</ListGroup.Item>
                                    <ListGroup.Item>Ataque: ##</ListGroup.Item>
                                    <ListGroup.Item>Defensa: ##</ListGroup.Item>
                                    <ListGroup.Item>E.Ataque: ##</ListGroup.Item>
                                    <ListGroup.Item>E.Defensa: ##</ListGroup.Item>
                                    <ListGroup.Item>Velocidad: ##</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                        <Card className='mx-auto' style={{ width: '18rem' }}>
                            <Card.Header>Tipo: Fantasma</Card.Header>
                            <Card.Img width="80" height="100" variant="top" className='mx-auto w-50' src="https://dthezntil550i.cloudfront.net/po/latest/po1807080447316790001907598/84d795ed-0b7f-4c64-a2a5-4a4d2c146045.png" />
                            <Card.Body>
                                <Card.Title className='text-center'>Pelotubbie</Card.Title>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>HP: ##</ListGroup.Item>
                                    <ListGroup.Item>Ataque: ##</ListGroup.Item>
                                    <ListGroup.Item>Defensa: ##</ListGroup.Item>
                                    <ListGroup.Item>E.Ataque: ##</ListGroup.Item>
                                    <ListGroup.Item>E.Defensa: ##</ListGroup.Item>
                                    <ListGroup.Item>Velocidad: ##</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Listado;