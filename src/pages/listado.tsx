import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Figure from 'react-bootstrap/Figure';

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
    const [query, setQuery] = useState("");

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

    const filterPokemon = pokemons?.slice(0, 28).filter((pokemon) => {
        return pokemon.name.toLocaleLowerCase().match(query.toLocaleLowerCase());
    })

    return (
        <>
            <h1>Pokemones Randoms</h1>

            <header>
                <input 
                    value={query}
                    placeholder="Search Pokemon..."
                    // Accede al valor del campo de entrada a través de event.target.value.
                    // el método trim() para eliminar los espacios en blanco al principio y al final del valor.
                    onChange={(event) => setQuery(event.target.value.trim())}
                    type="text"
                />
            </header>

            <div className='content-wrapper'>
                <div className='content'>
                    <div className='row gap-3'>
                        {/* Mapeo de los primeros 5 pokemons del estado para renderizar tarjetas */}
                        {filterPokemon?.slice(0, 28).map((pokemon) => (
                            <Card className='mx-auto' style={{ width: '18rem' }}>
                                <Card.Header><b>Tipo: </b>{pokemon.type}</Card.Header>
                                <Card.Img width="80" height="100" variant="top" className='mx-auto w-50' src={pokemon.img_gif} />
                                <Card.Body>
                                    <Card.Title className='text-center'>{pokemon.id} - {pokemon.name}</Card.Title>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>
                                            <Figure.Image
                                                width={16}
                                                height={16}
                                                alt="171x180"
                                                src="https://cdn-icons-png.flaticon.com/128/833/833472.png"
                                            />
                                            <b> HP: </b>{pokemon.hp}</ListGroup.Item>
                                        <ListGroup.Item>
                                        <Figure.Image
                                                width={16}
                                                height={16}
                                                alt="171x180"
                                                src="https://cdn-icons-png.flaticon.com/128/3522/3522092.png"
                                            /><b> Ataque: </b>{pokemon.attack}</ListGroup.Item>
                                        <ListGroup.Item>
                                        <Figure.Image
                                                width={16}
                                                height={16}
                                                alt="171x180"
                                                src="https://cdn-icons-png.flaticon.com/128/929/929429.png"
                                            /><b>Defensa: </b>{pokemon.defense}</ListGroup.Item>
                                        <ListGroup.Item>
                                        <Figure.Image
                                                width={16}
                                                height={16}
                                                alt="171x180"
                                                src="https://cdn-icons-png.flaticon.com/128/934/934478.png"
                                            /><b>E.Ataque: </b>{pokemon.sp_atk}</ListGroup.Item>
                                        <ListGroup.Item>
                                        <Figure.Image
                                                width={16}
                                                height={16}
                                                alt="171x180"
                                                src="https://cdn-icons-png.flaticon.com/128/8037/8037114.png"
                                            /><b>E.Defensa: </b>{pokemon.sp_def}</ListGroup.Item>
                                        <ListGroup.Item>
                                        <Figure.Image
                                                width={16}
                                                height={16}
                                                alt="171x180"
                                                src="https://cdn-icons-png.flaticon.com/128/728/728139.png"
                                            /><b>Velocidad: </b>{pokemon.speed}</ListGroup.Item>
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