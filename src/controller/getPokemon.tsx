// Importa la interfaz de Pokemon desde el modelo correspondiente
import { Pokemon } from '../models/pokemon.m';

// Función asincrónica para obtener la lista de Pokemons
export async function getPokemons(): Promise<Pokemon[]> {
    // Realiza una solicitud HTTP GET para obtener los datos de los Pokemons
    const response = await fetch("https://unpkg.com/pokemons@1.1.0/pokemons.json");

    // Convierte la respuesta en un objeto JSON
    const data = await response.json();

    // Mapea los resultados del JSON para crear un array de objetos Pokemon con los campos necesarios
    const pokemons = data.results.map((pokemon: any) => ({
        id: pokemon.national_number,          
        name: pokemon.name,                   
        img_gif: pokemon.sprites['animated'], 
        img_normal: pokemon.sprites['normal'], 
        img_large: pokemon.sprites['large'],  
        total: pokemon.total,                 
        hp: pokemon.hp,                       
        attack: pokemon.attack,               
        defense: pokemon.defense,             
        sp_atk: pokemon.sp_atk,               
        sp_def: pokemon.sp_def,         
        speed: pokemon.speed,              
    }));

    // Retorna el array de objetos Pokemon
    return pokemons;
}
