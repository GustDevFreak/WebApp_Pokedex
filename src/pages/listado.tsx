import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

// Importación de la función para obtener Pokemons y la interfaz de Pokemon
import { getPokemons } from '../controller/getPokemon';
import { Pokemon } from '../models/pokemon.m';

const Listado = () => {
    // Definición del estado local para almacenar la lista de Pokemons
    /* 
    <Pokemon[]> es una anotación de TypeScript que especifica que el estado pokemons será un array de objetos de tipo Pokemon.
    [] es el valor inicial del estado, que en este caso es un array vacío. Esto significa que inicialmente pokemons estará vacío 
    hasta que se actualice con los datos de la API.
    */
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    // Uso del hook useEffect para ejecutar el código cuando el componente se monta
    useEffect(() => {
        // Función asincrónica para obtener todos los Pokemons y actualizar el estado
        /*
        Esta función llama a getPokemons, que es una función que realiza una solicitud a una API para obtener datos de Pokemons y 
        devuelve una lista de Pokemons.
        await getPokemons() espera a que la promesa devuelta por getPokemons se resuelva y almacena el resultado en allPokemons.
        Después de definir getAll, se llama inmediatamente dentro del useEffect para que se ejecute cuando el componente se monte.
        Cuando el componente Listado se monta, el useEffect se ejecuta.
        */
        const getAll = async () => {
            const allPokemons = await getPokemons();
            setPokemons(allPokemons);
        }
        getAll();
    });

    return (
        <>
            <h1>Pokemones Randoms</h1>

            <div className='content-wrapper'>
                <div className='content'>
                    <div className='row gap-3'>
                        {/* Mapeo de los primeros 5 pokemons del estado para renderizar tarjetas */}
                        {pokemons?.slice(0, 5).map((pokemon) => (
                            <Card className='mx-auto' style={{ width: '18rem' }}>
                                <Card.Header><b>Tipo: </b>{pokemon.type}</Card.Header>
                                <Card.Img width="80" height="100" variant="top" className='mx-auto w-50' src={pokemon.img_gif} />
                                <Card.Body>
                                    <Card.Title className='text-center'>{pokemon.name}</Card.Title>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item><b>HP: </b>{pokemon.hp}</ListGroup.Item>
                                        <ListGroup.Item><b>Ataque: </b>{pokemon.attack}</ListGroup.Item>
                                        <ListGroup.Item><b>Defensa: </b>{pokemon.defense}</ListGroup.Item>
                                        <ListGroup.Item><b>E.Ataque: </b>{pokemon.sp_atk}</ListGroup.Item>
                                        <ListGroup.Item><b>E.Defensa: </b>{pokemon.sp_def}</ListGroup.Item>
                                        <ListGroup.Item><b>Velocidad: </b>{pokemon.speed}</ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Listado;