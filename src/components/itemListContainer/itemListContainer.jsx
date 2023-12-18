import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../itemList/itemList";
import Loading from "../loading/loading";
import styles from './styles.module.css'

const ItemListContainer = () => {
    const [pokemon, setPokemon] = useState([]);
    const { id } = useParams();
    const [loading, setLoading] = useState(true)
    const url = id ? `https://pokeapi.co/api/v2/type/${id}` : "https://pokeapi.co/api/v2/pokemon/?limit=151";

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(json => {
                const data = id ? json.pokemon.map(poke => poke.pokemon) : json.results;
                setPokemon(data);
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => setLoading(false))
    }, [id, url]);

    return (
        <>
           <div className="container">
           <div className={styles.flex}>
                {loading ? <Loading /> : <ItemList className={styles.body} pokemon={pokemon} />}
            </div>
           </div>

        </>
    );
};

export default ItemListContainer;
