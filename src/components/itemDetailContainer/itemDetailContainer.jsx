import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../loading/loading";


const ItemDetailContainer = () => {
    
    const [pokemonDetails, setPokemonDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams()


    useEffect(() => {
        setLoading(true); // Establecer loading en true al inicio de la solicitud
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => res.json())
            .then(json => {
                setPokemonDetails(json.results);
                setLoading(false); // Establecer loading en false después de cargar los datos
                console.log(json);
            })
            .catch(error => {
                setLoading(false); // Asegurar que loading sea false en caso de error
                console.error(error);
            });
    }, [id]);

    // Verificar si loading está en true y mostrar un indicador de carga mientras se obtienen los datos
    if (loading) {
        return <Loading/>;
    }

    return (
        <>
            <p>Name: {pokemonDetails.name}</p>
            <p>Height: {pokemonDetails.height}</p>
            <p>Weight: {pokemonDetails.weight}</p>
            {/* Otros detalles del Pokémon */}
        </>
    );
};

export default ItemDetailContainer;
